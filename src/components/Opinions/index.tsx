import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Opinions = (): JSX.Element => {
  const commonClassNames = "min-h-fit min-w-[431px] mx-4"

  return (
    <div className=" bg-ada-light-pink text-center py-16">
      <h2 className="max-w-[740px] text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-pink2 h-[24px] lg:h-[68px] lg:mt-[-10px] mx-auto">
        A przecież Twoja nauka
      </h2>
      <h2 className="max-w-[800px] text-adaBase lg:text-adaTitle font-bold lg:mb-2 border-b-[16px] lg:border-b-[30px] border-ada-pink2 h-[24px] lg:h-[68px] lg:mt-[-10px] mx-auto">
        reklam może wyglądać tak:
      </h2>
      <div className="overflow-hidden">
        <div className="flex my-10">
          <div className="flex items-center animate-marquee whitespace-nowrap mb-20">
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja1.webp"
                alt=""
                placeholder="none"
                width={431}
                height={276}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja2.webp"
                alt=""
                placeholder="none"
                width={432}
                height={79}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja3.webp"
                alt=""
                placeholder="none"
                width={425}
                height={111}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja4.webp"
                alt=""
                placeholder="none"
                width={537}
                height={83}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja5.webp"
                alt=""
                placeholder="none"
                width={537}
                height={83}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja6.webp"
                alt=""
                placeholder="none"
                width={537}
                height={130}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja7.webp"
                alt=""
                placeholder="none"
                width={537}
                height={83}
              />
            </div>
          </div>
          <div className="flex items-center animate-marquee2 whitespace-nowrap">
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja1.webp"
                alt=""
                placeholder="none"
                width={431}
                height={276}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja2.webp"
                alt=""
                placeholder="none"
                width={432}
                height={79}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja3.webp"
                alt=""
                placeholder="none"
                width={425}
                height={111}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja4.webp"
                alt=""
                placeholder="none"
                width={537}
                height={83}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja5.webp"
                alt=""
                placeholder="none"
                width={537}
                height={83}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja6.webp"
                alt=""
                placeholder="none"
                width={537}
                height={130}
              />
            </div>
            <div className={commonClassNames}>
              <StaticImage
                src="../../images/referencja7.webp"
                alt=""
                placeholder="none"
                width={537}
                height={83}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opinions
