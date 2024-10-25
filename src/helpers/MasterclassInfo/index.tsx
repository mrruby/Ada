import React from "react"

interface Props {
  title: string
  subtitle1: string
  subtitle2: JSX.Element
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

export const MasterclassInfo: React.FC<Props> = ({
  title,
  subtitle1,
  subtitle2,
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
}) => {
  return (
    <div className="w-full py-5 md:py-20 px-2 relative">
      {image}
      <div className="max-w-[740px]  flex flex-col items-center mx-auto">
        <h2 className="text-adaSubtitle lg:text-adaSubtitleThird font-bold uppercase">
          {title}
        </h2>
        <p className="uppercase font-bold md:text-adaDesc text-center">
          {subtitle1}
        </p>
        <p className="pt-2 text-center">{subtitle2}</p>
        <div className="pt-4 md:max-w-[40vw]">
          <h3 className="font-bold md:text-adaDesc pb-4 mt-10">Efekty:</h3>
          <ul className="flex flex-row gap-[10px] mx-auto mb-10">
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
        </div>
        <div className="md:max-w-[40vw]">
          <h3 className="font-bold md:text-adaDesc pb-4">Poziom trudności:</h3>
          <p className="flex flex-col md:flex-row text-adaMin md:text-adaStandard">
            <span className="mr-2">✅</span>
            {forWhom}
          </p>
          <p className="pt-4">{forWhomInfo}</p>
        </div>
        <div className={`${btnStyle} my-20`}>
          <div
            className={`w-screen md:h-[80px] flex justify-center items-center bg-ada-pink5 mx-auto ${btnMargin}`}
          >
            <span className="font-extrabold md:text-adaSubtitleSecondary">
              {btn}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center">{imageInfo}</div>
      <div className="mx-auto max-w-[800px]">
        <table>
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
                <h4 className={h4Style}>Koszt pozyskania kontaktu: </h4>
                <p className={pStyle}>{costOfContacts}</p>
              </td>
            )}
          </tr>
          <tr className="flex flex-col md:table-row">
            {people ? (
              <td className="md:max-w-[500px]">
                <h4 className={h4Style}>
                  Liczba osób, która wypełniła formularz zapisu:{" "}
                </h4>
                <p className={pStyle}>{people}</p>
              </td>
            ) : (
              ""
            )}
            {roas ? (
              <td>
                <h4 className={h4Style}>ROAS: </h4>
                <p className={pStyle}>{roas}</p>
              </td>
            ) : (
              ""
            )}
          </tr>
        </table>
        {addInfo}
      </div>
    </div>
  )
}
