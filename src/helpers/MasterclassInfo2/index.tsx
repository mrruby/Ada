import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React, { useState } from "react"

interface Props {
  title: string
  subtitle1: string
  subtitle2: JSX.Element
  subtitle3: string
  efects: string[]
  forWhom: string
  forWhomInfo: string | JSX.Element
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
  addInfo?: string | JSX.Element
  image?: JSX.Element
  imageInfo?: JSX.Element
  btnStyle?: string
  btnMargin?: string
  sectionId?: string
}

const h4Style =
  "bg-ada-pink5 font-bold text-adaMin md:text-adaDesc w-fit py-1 pr-1 "
const pStyle = "mt-1 pr-4 text-adaMin md:text-adaStandard"

export const MasterclassInfo2: React.FC<Props> = ({
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
  btnStyle = "",
  btnMargin = "",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleToggle = () => setIsVisible(!isVisible)

  return (
    <div className="w-full py-5 md:py-20 px-2 relative md:h-[900px]">
      {!isVisible ? (
        <div className="flex flex-col items-center mx-auto h-full">
          {image && <div className="mb-6">{image}</div>}

          <h2 className="text-adaSubtitle lg:text-adaSubtitleThird font-bold uppercase">
            {title}
          </h2>
          <p className="uppercase font-bold md:text-adaDesc text-center">
            {subtitle1}
          </p>
          <p className="pt-2 text-center">{subtitle2}</p>
          <div className="md:flex max-w-[940px] gap-16">
            <div className="max-w-[360px] mt-16">
              <h3 className="font-bold md:text-adaDesc pb-4">Efekty:</h3>
              <ul className="flex flex-row gap-8 mx-auto mb-10 flex-wrap">
                {efects.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row text-adaMin md:text-adaStandard"
                  >
                    <span className="mr-2">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                text={<span className="font-extrabold uppercase">{btn}</span>}
                textSize="md:text-adaSubtitle"
                btnStyle="bg-blue md:w-[410px] md:h-[90px] text-ada-white my-2 md:my-10 mx-auto rounded-[50px]"
                sectionId="pricing"
              />
            </div>
            <div className="max-w-[300px] mt-16">
              <h3 className="font-bold md:text-adaDesc pb-4">
                Poziom trudności:
              </h3>
              <p className="flex flex-col md:flex-row text-adaMin md:text-adaStandard">
                <span className="mr-2">✅</span>
                {forWhom}
              </p>
              <p className="pt-4">{forWhomInfo}</p>
            </div>
            <button
              onClick={handleToggle}
              aria-label="Pokaż szczegóły kampanii"
              className="md:mt-10 focus:outline-none w-[40px] md:w-[60px] -rotate-90"
            >
              <StaticImage
                src={"../../images/magicBtn.svg"}
                alt="Przycisk przejścia"
                placeholder="blurred"
                width={80}
                height={80}
                className="transition-transform duration-300 ease-in-out hover:scale-120 hover:animate-pulse cursor-pointer"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center gap-8 items-center h-full">
          <div>
            <div className={`${btnStyle} mb-2`}>
              <div
                className={`w-screen md:h-[80px] flex justify-center items-center bg-ada-pink5 mx-auto ${btnMargin}`}
              >
                <span className="font-extrabold md:text-adaSubtitleSecondary">
                  {subtitle3}
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-2 md:gap-8 items-center">
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleToggle}
                  aria-label="Wróć do widoku efektów"
                  className="mt-10 focus:outline-none md:w-[60px] rotate-90"
                >
                  <StaticImage
                    src={"../../images/magicBtn.svg"}
                    alt="Przycisk powrotu"
                    placeholder="blurred"
                    width={80}
                    height={80}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-pulse cursor-pointer"
                  />
                </button>
              </div>
              <div>
                <div className="mx-auto flex justify-center">{imageInfo}</div>
                <div className="mx-auto max-w-[800px] mt-10">
                  <table>
                    <tbody>
                      <tr className="flex flex-col md:table-row">
                        <td className="md:max-w-[500px]">
                          <h4 className={h4Style}>Cel kampanii:</h4>
                          <p className={pStyle}>{purpose}</p>
                        </td>
                        <td>
                          <h4 className={h4Style}>Wydany budżet:</h4>
                          <p className={pStyle}>{cost}</p>
                        </td>
                      </tr>

                      <tr className="flex flex-col md:table-row">
                        <td className="md:max-w-[500px]">
                          <h4 className={h4Style}>Czas trwania kampanii:</h4>
                          <p className={pStyle}>{time}</p>
                        </td>
                        <td>
                          <h4 className={h4Style}>
                            {amount ? "Ilość zakupów:" : "Ilość kontaktów:"}
                          </h4>
                          <p className={pStyle}>{amount || amountOfContacts}</p>
                        </td>
                      </tr>

                      <tr className="flex flex-col md:table-row">
                        <td className="md:max-w-[500px]">
                          <h4 className={h4Style}>Grupy docelowe:</h4>
                          <p className={pStyle}>{groups}</p>
                        </td>
                        <td>
                          <h4 className={h4Style}>
                            {people
                              ? "Wartość zakupów:"
                              : "Koszt pozyskania kontaktu:"}
                          </h4>
                          <p className={pStyle}>{value || costOfContacts}</p>
                        </td>
                      </tr>

                      {(people || roas) && (
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
                              <h4 className={h4Style}>ROAS:</h4>
                              <p className={pStyle}>{roas}</p>
                            </td>
                          )}
                        </tr>
                      )}
                    </tbody>
                  </table>
                  {addInfo && <div className="mt-4">{addInfo}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
