import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const HomePageNewBanner = () => {
  return (
    <div className="pt-20 pb-0 lg:pb-10 relative  px-2">
      <div className="mx-auto bg-ada-white2 border border-ada-magicOrange rounded-[40px] text-black max-w-[620px] text-center p-8">
        <h1 className="leading-snug mb-6 text-center font-anton font-normal text-adaSubtitleThird lg:text-[120px] mb-4 text-ada-magicOrange">
          CZEŚĆ!
        </h1>
        <p className="lg:text-adaSubtitle">
          Tutaj <b>Ada Promis-Urbas. </b>
          <br />
          Zajmuję się strategią marketingową, mediami społecznościowymi i
          płatnymi reklamami. Podpowiem Ci, jak prowadzić świadomy, kreatywny
          marketing dla Twojego biznesu.
        </p>
      </div>
      <div className="lg:absolute right-[-50px] bottom-0">
        <StaticImage
          loading="eager"
          src="../../images/homeImage.webp"
          alt="Ada w telefonie"
          placeholder="blurred"
          width={500}
          quality={75}
          className=""
        />
      </div>
      <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-2">
        <a href="#content">
          <StaticImage
            src={"../../images/magicBtn.svg"}
            alt=""
            placeholder="blurred"
            width={80}
            height={80}
          />
        </a>
      </div>
    </div>
  )
}

export default HomePageNewBanner
