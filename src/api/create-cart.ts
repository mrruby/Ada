import { createStorefrontApiClient } from "@shopify/storefront-api-client"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

interface CreateCartBody {
  productVariantId: string
  quantity: number
}

const client = createStorefrontApiClient({
  storeDomain: process.env.GATSBY_SHOPIFY_STORE_DOMAIN!,
  publicAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  apiVersion: "2024-07",
})

const createCartMutation = /* GraphQL */ `
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`

const createCart = async (productVariantId: string, quantity: number) => {
  const response = await client.request(createCartMutation, {
    variables: {
      lineItems: [
        {
          merchandiseId: `gid://shopify/ProductVariant/${productVariantId}`,
          quantity,
        },
      ],
    },
  })

  const userErrors = response.data.cartCreate.userErrors
  if (userErrors.length > 0) {
    const errorMessage = userErrors
      .map((error: any) => error.message)
      .join(", ")
    return {
      statusCode: 400,
      body: JSON.stringify({ error: errorMessage }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      checkoutUrl: response.data.cartCreate.cart.checkoutUrl,
    }),
  }
}

export default async function handler(
  req: GatsbyFunctionRequest<CreateCartBody>,
  res: GatsbyFunctionResponse
) {
  const { productVariantId, quantity } = req.body

  try {
    const result = await createCart(productVariantId, quantity)
    res.status(result.statusCode).json(JSON.parse(result.body))
  } catch (error) {
    console.error("Error creating cart and redirecting to checkout:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
