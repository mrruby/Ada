import { createStorefrontApiClient } from "@shopify/storefront-api-client"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { SHOPIFY_API_VERSION } from "../values/const"

interface CreateCartBody {
  productVariantId: string
  discountCode: string
  quantity: number
}

const client = createStorefrontApiClient({
  storeDomain: process.env.GATSBY_SHOPIFY_STORE_DOMAIN!,
  publicAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  apiVersion: SHOPIFY_API_VERSION,
})

const createCartMutation = /* GraphQL */ `
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`

const updateCartDiscountCodesMutation = /* GraphQL */ `
  mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
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

const handleUserErrors = (userErrors: any) => {
  const errorMessage = userErrors.map((error: any) => error.message).join(", ")
  return {
    statusCode: 400,
    body: JSON.stringify({ error: errorMessage }),
  }
}

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
    return handleUserErrors(userErrors)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      cartId: response.data.cartCreate.cart.id,
      checkoutUrl: response.data.cartCreate.cart.checkoutUrl,
    }),
  }
}

const updateCartDiscountCodes = async (
  cartId: string,
  discountCode: string
) => {
  const response = await client.request(updateCartDiscountCodesMutation, {
    variables: {
      cartId,
      discountCodes: [discountCode],
    },
  })

  const userErrors = response.data.cartDiscountCodesUpdate.userErrors
  if (userErrors.length > 0) {
    return handleUserErrors(userErrors)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      checkoutUrl: response.data.cartDiscountCodesUpdate.cart.checkoutUrl,
    }),
  }
}

export default async function handler(
  req: GatsbyFunctionRequest<CreateCartBody>,
  res: GatsbyFunctionResponse
) {
  const { productVariantId, quantity, discountCode } = req.body

  try {
    const cartResult = await createCart(productVariantId, quantity)
    if (cartResult.statusCode !== 200) {
      return res.status(cartResult.statusCode).json(JSON.parse(cartResult.body))
    }

    const { cartId, checkoutUrl } = JSON.parse(cartResult.body)

    if (discountCode) {
      const discountResult = await updateCartDiscountCodes(cartId, discountCode)
      if (discountResult.statusCode !== 200) {
        return res
          .status(discountResult.statusCode)
          .json(JSON.parse(discountResult.body))
      }
    }

    return res.status(200).json({ checkoutUrl })
  } catch (error) {
    console.error("Error creating cart and redirecting to checkout:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
