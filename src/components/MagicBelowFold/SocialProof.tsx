import React from "react"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MagicComments from "components/MagicComments"
import MagicCommunityOpinions from "components/MagicCommunityOpinions"
import MagicBanner5 from "components/MagicBanner5"

const SocialProof = () => {
  return (
    <>
      <div className="bg-ada-pink8">
        <MagicComments version={1} />
      </div>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicCommunityOpinions />
      </MaxWithBgColorContainer>
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
