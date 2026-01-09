import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Typography from "../shared/Typography"

type Variant = "default" | "sowa"

// Interface moved outside component
interface AudienceItem {
  id: string
  title: string
  description: string
}

// Static array moved outside component for DRY/perf
const TARGET_AUDIENCES: AudienceItem[] = [
  {
    id: "personal-brand",
    title: "Jesteś marką osobistą lub soloprzedsiębiorczynią",
    description: "i chcesz wystartować z reklamami bez przepalania budżetu.",
  },
  {
    id: "micro-ecommerce",
    title: "Prowadzisz mikro-e-commerce albo tworzysz butikowe produkty",
    description: "i potrzebujesz stabilnego wzrostu bez pomocy dużej agencji.",
  },
  {
    id: "marketer",
    title: "Pracujesz jako marketerka lub SMM-ka dla kobiecych marek",
    description:
      'i szukasz sprawdzonego procesu „od briefu do wyniku" w Meta Ads.',
  },
  {
    id: "two-groups",
    title: "Należysz do jednej z dwóch grup:",
    description:
      "już próbowałaś i się sparzyłaś lub dopiero startujesz i chcesz uniknąć typowych błędów.",
  },
]

// Sowa variant specific content
const SOWA_AUDIENCES: AudienceItem[] = [
  {
    id: "own-business-1",
    title: "Prowadzisz własną działalność",
    description:
      "i nie jesteś zadowolona z wyników swoich reklam, ale nie masz funduszy na zatrudnienie agencji",
  },
  {
    id: "keep-up",
    title: "Chcesz trzymać rękę na pulsie",
    description:
      "i zrozumieć jak działa system, bez poświęcania godzin na naukę reklam i doktorat z adsów",
  },
  {
    id: "marketing-job",
    title: "Pracujesz w marketingu",
    description: "i prowadzisz reklamy dla klientów",
  },
  {
    id: "own-business-2",
    title: "Prowadzisz własną działalność",
    description:
      "i nie jesteś zadowolona z wyników swoich reklam, ale nie masz funduszy na zatrudnienie agencji",
  },
]

const variantConfig: Record<
  Variant,
  {
    bgColor: string
    headingClass: string
    titleColors: { main: string; highlight: string }
    audienceTitleClass: string
    descriptionClass: string
    buttonTextClass: string
    buttonStyle: string
    renderMode: "inline" | "boxes"
    boxColors?: string[]
  }
> = {
  default: {
    bgColor: "bg-pink-100",
    headingClass: "text-4xl md:text-5xl font-bold",
    titleColors: { main: "text-ada-newPurple", highlight: "text-ada-pink7" },
    audienceTitleClass:
      "text-xl font-semibold bg-ada-newPurple text-white pl-1 pr-3 py-1 inline",
    descriptionClass: "inline ml-2 text-gray-800",
    buttonTextClass: "font-bold text-ada-newPurple uppercase",
    buttonStyle:
      "uppercase bg-white font-bold tracking-wide h-[48px] md:h-[60px] px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]",
    renderMode: "inline",
  },
  sowa: {
    bgColor: "bg-ada-sowaBurgundy",
    headingClass:
      "font-playfair text-[48px] font-extrabold leading-[100%] text-center",
    titleColors: { main: "text-white", highlight: "text-ada-sowaGold" },
    audienceTitleClass: "",
    descriptionClass: "",
    buttonTextClass:
      "font-montserrat font-bold text-black uppercase text-[20px] md:text-[24px]",
    buttonStyle:
      "uppercase bg-white font-bold tracking-wide h-[72px] md:h-[80px] px-12 shadow-xl hover:opacity-90 rounded-full min-w-[200px]",
    renderMode: "boxes",
    boxColors: [
      "bg-ada-sowaGold2",
      "bg-ada-sowaGold",
      "bg-ada-sowaDarkRed",
      "bg-ada-sowaDarkBurgundy",
    ],
  },
}

interface MagicWebinar3Props {
  variant?: Variant
  sectionId?: string
}

const MagicWebinar3 = ({
  variant = "default",
  sectionId = "top",
}: MagicWebinar3Props) => {
  const config = variantConfig[variant]

  const renderAudienceItem = ({ id, title, description }: AudienceItem) => (
    <div className="flex gap-3" key={id}>
      <span className="text-2xl flex-shrink-0 mt-1">✅</span>
      <div>
        <Typography variant="h3" className={config.audienceTitleClass}>
          {title}
        </Typography>
        <Typography variant="body" className={config.descriptionClass}>
          {description}
        </Typography>
      </div>
    </div>
  )

  return (
    <div className="relative w-full">
      <div className={`min-h-screen ${config.bgColor}`}>
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={config.headingClass}>
                  <span className={config.titleColors.main}>
                    {variant === "sowa"
                      ? "Te warsztaty są "
                      : "Ten masterclass jest "}
                  </span>
                  <span className={config.titleColors.highlight}>
                    dla Ciebie
                  </span>
                  <span className={config.titleColors.main}>, jeśli:</span>
                </h1>
              </div>

              {config.renderMode === "boxes" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(variant === "sowa" ? SOWA_AUDIENCES : TARGET_AUDIENCES).map(
                    (item, idx) => (
                      <div
                        key={item.id}
                        className={`${config.boxColors?.[idx % (config.boxColors?.length || 1)]} rounded-lg p-6 text-center`}
                      >
                        <span className="text-4xl block mb-4">✅</span>
                        <h3 className="font-montserrat font-extrabold text-[20px] leading-[122%] text-center text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="font-montserrat text-[20px] leading-[122%] text-center text-white">
                          {item.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {TARGET_AUDIENCES.map(renderAudienceItem)}
                </div>
              )}
              <div
                className={
                  config.renderMode === "boxes" ? "flex justify-center" : ""
                }
              >
                <a
                  href={`#${sectionId}`}
                  className={`inline-flex items-center justify-center ${config.buttonStyle}`}
                >
                  <span className={config.buttonTextClass}>
                    Tak, to o mnie!
                  </span>
                </a>
              </div>
            </div>

            <div className="relative w-full md:w-auto">
              {variant === "sowa" ? (
                <StaticImage
                  loading="eager"
                  src="../../images/ada-phone.webp"
                  alt="Ada w telefonie"
                  placeholder="blurred"
                  width={700}
                  quality={100}
                  className="w-full md:w-auto rounded-3xl overflow-hidden"
                  imgClassName="rounded-3xl"
                />
              ) : (
                <StaticImage
                  loading="eager"
                  src="../../images/ada_magic.webp"
                  alt="Ada w telefonie"
                  placeholder="blurred"
                  width={700}
                  quality={100}
                  className="w-full md:w-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicWebinar3
