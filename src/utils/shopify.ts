import { createStorefrontApiClient } from "@shopify/storefront-api-client"

const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN!,
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
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

export async function createCartAndRedirectToCheckout(
  productVariantId: string,
  quantity: number
): Promise<string> {
  const handleUserErrors = (userErrors: any[]): void => {
    if (userErrors.length > 0) {
      const errorMessage = userErrors
        .map((error: any) => error.message)
        .join(", ")
      throw new Error(errorMessage)
    }
  }

  try {
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

    handleUserErrors(response.data.cartCreate.userErrors)

    return response.data.cartCreate.cart.checkoutUrl
  } catch (error) {
    console.error("Error creating cart and redirecting to checkout:", error)
    throw error
  }
}
