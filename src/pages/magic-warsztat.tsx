import Layout from "components/Layout"
import MagicWebinar1 from "components/MagicWebinar1"
import MagicWebinar10 from "components/MagicWebinar10"
import MagicWebinar11 from "components/MagicWebinar11"
import MagicWebinar12 from "components/MagicWebinar12"
import MagicWebinar2 from "components/MagicWebinar2"
import MagicWebinar3 from "components/MagicWebinar3"
import MagicWebinar4 from "components/MagicWebinar4"
import MagicWebinar5 from "components/MagicWebinar5"
import MagicWebinar8 from "components/MagicWebinar8"
import MagicWebinar9 from "components/MagicWebinar9"
import SEO from "components/seo"
import React from "react"

const MagicWebinarPage = (): JSX.Element => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MagicWebinar1 version={2} />
      <MagicWebinar2 version={2} />
      <MagicWebinar3 version={2} />
      <MagicWebinar4 version={2} />
      <MagicWebinar5 version={2} />
      <MagicWebinar8 version={2} />
      <MagicWebinar10 version={2} />
      <MagicWebinar9 version={2} />
      <MagicWebinar11 version={2} />
      <MagicWebinar12 version={2} />
    </Layout>
  )
}
export const Head = () => (
  <SEO
    title="Marketing Ads Girls Inside Club (MAGIC): Społeczność kobiet, które skalują swoje biznesy z pomocą reklam pod czujnym okiem profesjonalistek"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicWebinarPage
