import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import SEO from "components/seo"
import Photo from "components/Photo"
import PhotosContainer from "components/PhotosContainer"
import MainPostList from "components/MainPostList"
import CustomBanner from "components/CustomBanner"
import { StaticImage } from "gatsby-plugin-image"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"

type Image = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any
}

const IndexPage = (): JSX.Element => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 3) {
  //       edges {
  //         node {
  //           id
  //           caption
  //           localFile {
  //             childImageSharp {
  //               gatsbyImageData(width: 200, height: 200, layout: FIXED)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout
    flowerBlue={true}
    starPink={true}
    >
      <SEO title="Home" />
      <MaxWithBgColorContainer bgColor="bg-ada-white">
      <CustomBanner
        title={<>Ada<span className="text-ada-pink"> Promis</span></>}
        paragraph1={<>Zajmuję się strategią marketingową, mediami społecznościowymi i płatnymi reklamami. Podpowiem Ci, jak prowadzić <span className="font-bold">świadomy, kreatywny marketing</span> dla Twojego biznesu.</>}
        image={<StaticImage src={"../images/ada_hero.webp"} alt="Ada Promis - hero" placeholder="none"  />}
      />
      </MaxWithBgColorContainer>
      <MainPostList />
      {/* <PhotosContainer>
        {listOfImages.map(({ node }: Image) => (
          <Photo
            key={node.id}
            id={node.id}
            caption={node.caption}
            fixed={node.localFile.childImageSharp.gatsbyImageData}
          />
        ))}
      </PhotosContainer> */}
    </Layout>
  )
}

export default IndexPage
