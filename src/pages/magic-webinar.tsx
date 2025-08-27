import Layout from "components/Layout"
import MagicWebinar1 from "components/MagicWebinar1"
import MagicWebinar10 from "components/MagicWebinar10"
import MagicWebinar11 from "components/MagicWebinar11"
import MagicWebinar12 from "components/MagicWebinar12"
import MagicWebinar2 from "components/MagicWebinar2"
import MagicWebinar3 from "components/MagicWebinar3"
import MagicWebinar4 from "components/MagicWebinar4"
import MagicWebinar5 from "components/MagicWebinar5"
import MagicWebinar6 from "components/MagicWebinar6"
import MagicWebinar7 from "components/MagicWebinar7"
import MagicWebinar8 from "components/MagicWebinar8"
import MagicWebinar9 from "components/MagicWebinar9"
import SEO from "components/seo"
import React from "react"

const MagicWebinarPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      <MagicWebinar1 />
      <MagicWebinar2 />
      <MagicWebinar3 />
      <MagicWebinar4 />
      <MagicWebinar5 />
      <MagicWebinar6 />
      <MagicWebinar7 />
      <MagicWebinar8 />
      <MagicWebinar9 />
      <MagicWebinar10 />
      <MagicWebinar11 />
      <MagicWebinar12 />
    </Layout>
  )
}
export const Head = () => (
  <SEO
    title="OD PASJI DO ZYSKU: Zwiększ sprzedaż bez ciągłego podnoszenia budżetu reklamowego"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default MagicWebinarPage
