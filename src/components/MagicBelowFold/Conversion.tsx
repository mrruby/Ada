import React from "react"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import MasterclassFAQ from "components/MasterclassFAQ"
import MagicFinalCTA from "components/MagicFinalCTA"

const Conversion = () => {
  return (
    <>
      <MaxWithBgColorContainer bgColor="bg-ada-light-pink">
        <MasterclassFAQ version={5} />
      </MaxWithBgColorContainer>
      <MaxWithBgColorContainer bgColor="bg-ada-white3">
        <MagicFinalCTA />
      </MaxWithBgColorContainer>
    </>
  )
}

export default Conversion
