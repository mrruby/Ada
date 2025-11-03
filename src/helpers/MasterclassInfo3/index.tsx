import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

interface Props {
  title: string
  subtitle1: string | React.JSX.Element
  subtitle2: React.JSX.Element
  subtitle3: string
  efects: string[]
  forWhom: string
  forWhomInfo: string | React.JSX.Element
  btn: string
  purpose: string
  cost: string
  time: string
  amount?: string
  amountOfContacts?: string
  costOfContacts?: string
  groups: string
  value?: string
  people?: string
  roas?: string
  addInfo?: string | React.JSX.Element
  image?: React.JSX.Element
  imageInfo?: React.JSX.Element
  btnStyle?: string
  btnMargin?: string
  sectionId?: string
  roasLabel?: string
  textColor?: "text-black" | "text-white"
  btnLink?: string
}

const h4Style =
  "bg-ada-magicPink2 font-bold text-adaMin md:text-adaDesc w-fit py-1 pr-1 "
const pStyle = "mt-1 pr-4 text-adaMin md:text-adaStandard"

export const MasterclassInfo3: React.FC<Props> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  efects,
  forWhom,
  forWhomInfo,
  btn,
  purpose,
  cost,
  time,
  amount,
  amountOfContacts,
  costOfContacts,
  groups,
  value,
  people,
  roas,
  addInfo,
  image,
  imageInfo,
  btnStyle,
  btnMargin,
  roasLabel = "ROAS",
  textColor = "text-black",
  btnLink = "#pakiety",
}) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div
      className={`relative w-full lg:h-[900px] py-5 md:py-20 px-2 overflow-visible transition-all duration-700 ${textColor}`}
    >
      <div
        className={`lg:flex w-full transition-transform duration-700 ease-in-out ${
          showDetails ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {image}
        <div className="flex-shrink-0 w-full flex flex-col items-center z-10 justify-center">
          <div className="max-w-[480px] flex flex-col items-center mx-auto">
            <div className="flex flex-col gap-2 justify-center bg-ada-white2 border border-ada-magicOrange rounded-[24px] shadow-xl text-center p-4 max-w-[480px] mb-12">
              <h2 className="text-adaSubtitle lg:text-adaSubtitleThird uppercase font-anton text-ada-magicOrange">
                {title}
              </h2>
              <p className="uppercase font-bold md:text-adaDesc text-center">
                {subtitle1}
              </p>
              <p className="pt-2">{subtitle2}</p>
            </div>
            <div className="flex flex-col justify-center gap-[20px] w-full">
              <div>
                <h3 className="font-bold md:text-adaDesc py-4">
                  Poziom trudności:
                </h3>
                <p className="flex flex-col md:flex-row text-adaMin md:text-adaStandard">
                  <span className="lg:-ml-8 pr-2">✅ </span>
                  {forWhom}
                </p>
                <p className="pt-4">{forWhomInfo}</p>
              </div>
              <div className="lg:min-w-[350px]">
                <h3 className="font-bold md:text-adaDesc pb-2 mt-10">
                  Efekty:
                </h3>
                <ul className="flex flex-col lg:gap-[10px] mx-auto mb-2 mr-2">
                  {efects.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col md:flex-row text-adaMin md:text-adaStandard"
                    >
                      <span className="lg:-ml-8 pr-2">✅ </span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`${btnStyle} my-12`}>
              <div
                className={`px-3 lg:w-[400px] rounded-full md:h-[60px] flex justify-center items-center bg-ada-pink5 mx-auto border border-black ${btnMargin}`}
              >
                <a
                  className="font-extrabold md:text-adaSubtitle text-white uppercase"
                  href={btnLink}
                  rel="noopener noreferrer"
                >
                  {btn}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-shrink-0 w-full flex flex-col justify-between
 items-center relative z-10"
        >
          <div className="max-w-[840px] mx-auto">
            <div className="w-full bg-ada-magicPink2">
              <p className="pt-2 text-center text-adaStandard lg:text-adaSubtitleSecondary font-bold mb-4">
                {subtitle3}
              </p>
            </div>
            <div className="mx-auto flex justify-center">{imageInfo}</div>
            <div className="mx-auto max-w-[800px] mt-6">
              <table className="w-full">
                <tbody>
                  <tr className="flex flex-col md:table-row">
                    <td className="md:max-w-[500px]">
                      <h4 className={h4Style}>Cel kampanii: </h4>
                      <p className={pStyle}>{purpose}</p>
                    </td>
                    <td>
                      <h4 className={h4Style}>Wydany budżet: </h4>
                      <p className={pStyle}>{cost}</p>
                    </td>
                  </tr>

                  <tr className="flex flex-col md:table-row">
                    <td className="md:max-w-[500px]">
                      <h4 className={h4Style}>Czas trwania kampanii:</h4>
                      <p className={pStyle}>{time}</p>
                    </td>
                    {amount ? (
                      <td>
                        <h4 className={h4Style}>Ilość zakupów:</h4>
                        <p className={pStyle}>{amount}</p>
                      </td>
                    ) : (
                      <td>
                        <h4 className={h4Style}>Ilość kontaktów:</h4>
                        <p className={pStyle}>{amountOfContacts}</p>
                      </td>
                    )}
                  </tr>

                  <tr className="flex flex-col md:table-row">
                    <td className="md:max-w-[500px]">
                      <h4 className={h4Style}>Grupy docelowe:</h4>
                      <p className={pStyle}>{groups}</p>
                    </td>
                    {people ? (
                      <td>
                        <h4 className={h4Style}>Wartość zakupów:</h4>
                        <p className={pStyle}>{value}</p>
                      </td>
                    ) : (
                      <td>
                        <h4 className={h4Style}>Koszt pozyskania kontaktu:</h4>
                        <p className={pStyle}>{costOfContacts}</p>
                      </td>
                    )}
                  </tr>

                  <tr className="flex flex-col md:table-row">
                    {people && (
                      <td className="md:max-w-[500px]">
                        <h4 className={h4Style}>
                          Liczba osób, która wypełniła formularz zapisu:
                        </h4>
                        <p className={pStyle}>{people}</p>
                      </td>
                    )}
                    {roas && (
                      <td>
                        <h4 className={h4Style}>{roasLabel}:</h4>
                        <p className={pStyle}>{roas}</p>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
              {addInfo}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`opacity-0 lg:opacity-100 absolute top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
          showDetails ? "left-0 rotate-180" : "right-0"
        }`}
      >
        <StaticImage
          src="../../images/magicArrowLeft.svg"
          alt={showDetails ? "Wróć" : "Otwórz szczegóły"}
          placeholder="blurred"
          width={80}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </button>
    </div>
  )
}
