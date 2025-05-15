import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Typography from "../shared/Typography"

const MagicWebinar3 = ({ version = 1 }: { version?: number }): JSX.Element => {
  const isPinkVersion = version === 2
  const primaryColor = isPinkVersion
    ? "text-ada-magicPurple"
    : "text-ada-magicOrange"
  const secondaryColor = isPinkVersion
    ? "text-ada-pink7"
    : "text-ada-magicPurple"
  const backgroundColor = isPinkVersion
    ? "bg-ada-newPurple2"
    : "bg-ada-magicPurple"

  const targetAudiences = [
    {
      title: "Jesteś marką osobistą lub soloprzedsiębiorczynią",
      description: "i chcesz wystartować z reklamami bez przepalania budżetu.",
    },
    {
      title: "Prowadzisz mikro-e-commerce albo tworzysz butikowe produkty",
      description:
        "i potrzebujesz stabilnego wzrostu bez pomocy dużej agencji.",
    },
    {
      title: "Pracujesz jako marketerka lub SMM-ka dla kobiecych marek",
      description:
        "i szukasz sprawdzonego procesu „od briefu do wyniku” w Meta Ads.",
    },
    {
      title: "Należysz do jednej z dwóch grup:",
      description:
        "już próbowałaś i się sparzyłaś lub dopiero startujesz i chcesz uniknąć typowych błędów.",
    },
  ]

  interface AudienceItem {
    title: string
    description: string
  }

  const renderAudienceItem = ({ title, description }: AudienceItem) => (
    <div className="flex gap-3" key={title}>
      <span className="text-2xl flex-shrink-0 mt-1">✅</span>
      <div>
        <Typography
          variant="h3"
          className={`text-xl font-semibold ${backgroundColor} text-white px-3 py-1 inline`}
        >
          {title}
        </Typography>
        <Typography variant="body" className="inline ml-2 text-gray-800">
          {description}
        </Typography>
      </div>
    </div>
  )

  return (
    <div className="relative w-full">
      <div className="min-h-screen bg-pink-100">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Typography
                  variant="h1"
                  className="text-4xl md:text-5xl font-bold"
                >
                  <span className={primaryColor}>🎯 Ten</span>{" "}
                  <span className={secondaryColor}>warsztat </span>{" "}
                  <span className={primaryColor}>jest dla Ciebie, jeśli…</span>
                </Typography>
              </div>

              <div className="space-y-6">
                {targetAudiences.map(renderAudienceItem)}
              </div>
              <Button
                type="button"
                text={
                  <span className="font-bold text-white uppercase">
                    Tak, to o mnie!
                  </span>
                }
                sectionId="signup"
                textSize="text-sm md:text-base "
                btnStyle="uppercase bg-ada-pink7 
                            font-semibold tracking-wide h-[48px] md:h-[60px] 
                            px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <StaticImage
                loading="eager"
                src="../../images/ada_magic.webp"
                alt="Ada w telefonie"
                placeholder="blurred"
                width={700}
                quality={100}
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar3
