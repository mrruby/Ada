import React from "react"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicBanner5 from "components/MagicBanner5"

const SocialProof = () => {
  return (
    <>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPurple4">
        <MagicBanner5 version={1} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-magicPink4">
        <MagicBanner5 version={2} />
      </MaxWithBgColorContainer>
    </>
  )
}

export default SocialProof
