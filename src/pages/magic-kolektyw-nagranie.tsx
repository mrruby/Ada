import SEO from "components/seo"
import { navigate } from "gatsby"
import React from "react"

const MagicCollectivePage = (): JSX.Element => {
  React.useEffect(() => {
    navigate("/magic-kolektyw/", { replace: true })
  }, [])

  return <></>
}

export const Head = () => (
  <SEO
    title="Magic: Marketing Ads Girls Inside Collective"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicCollectivePage
