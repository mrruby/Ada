import { createAdminApiClient } from "@shopify/admin-api-client"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { generateRandomDiscountCode } from "../utils/shopify"
import { SHOPIFY_API_VERSION } from "../values/const"

const client = createAdminApiClient({
  storeDomain: process.env.GATSBY_SHOPIFY_STORE_DOMAIN!,
  apiVersion: SHOPIFY_API_VERSION,
  accessToken: process.env.SHOPIFY_PRIVATE_STOREFRONT_ACCESS_TOKEN!,
})

const createDiscountMutation = /* GraphQL */ `
  mutation discountCodeBasicCreate(
    $basicCodeDiscount: DiscountCodeBasicInput!
  ) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            codes(first: 1) {
              nodes {
                code
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`

const handleErrors = (errors: any) => {
  const errorMessage = Object.values(errors).join(", ")
  return {
    statusCode: 400,
    body: JSON.stringify({ error: errorMessage }),
  }
}

const handleUserErrors = (userErrors: any) => {
  const errorMessage = userErrors.map((error: any) => error.message).join(", ")
  return {
    statusCode: 400,
    body: JSON.stringify({ error: errorMessage }),
  }
}

const createDiscount = async (productVariantId: string) => {
  const code = generateRandomDiscountCode()
  const endsAt = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString()
  try {
    const { data, errors } = await client.request(createDiscountMutation, {
      variables: {
        basicCodeDiscount: {
          appliesOncePerCustomer: true,
          code,
          title: `OTO ${code}`,
          startsAt: new Date().toISOString(),
          endsAt,
          customerSelection: {
            all: true,
          },
          customerGets: {
            value: {
              discountAmount: {
                amount: 100.0,
                appliesOnEachItem: false,
              },
            },
            items: {
              products: {
                productVariantsToAdd: [
                  `gid://shopify/ProductVariant/${productVariantId}`,
                ],
              },
            },
          },
        },
      },
    })

    if (errors) {
      return handleErrors(errors)
    }

    const userErrors = data.discountCodeBasicCreate.userErrors
    if (userErrors.length > 0) {
      return handleUserErrors(userErrors)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        discount: code,
        endsAt,
      }),
    }
  } catch (error) {
    console.error("Error creating discount:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    }
  }
}

export default async function handler(
  req: GatsbyFunctionRequest<{ productVariantId: string }>,
  res: GatsbyFunctionResponse
) {
  const { productVariantId } = req.body

  const result = await createDiscount(productVariantId)
  res.status(result.statusCode).json(JSON.parse(result.body))
}
