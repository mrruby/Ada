import { Button } from "helpers/Button"
import React from "react"

interface Props {
  title: string
  subtitle1: string
  subtitle2: JSX.Element
  efects: string[]
  forWhom: string
  forWhomInfo: string
  btn: string
  btnUrl: string
  purpose?: string
  cost?: string
  time?: string
  amount?: string
  groups?: string
  value?: string
  people?: string
  roas?: string
}

const h4Style = "bg-ada-pink5 font-bold md:text-adaDesc w-fit py-1 pr-1"
const pStyle = "mt-1 pr-4"

export const MasterclassInfo: React.FC<Props> = ({
  title,
  subtitle1,
  subtitle2,
  efects,
  forWhom,
  forWhomInfo,
  btn,
  btnUrl,
  purpose,
  cost,
  time,
  amount,
  groups,
  value,
  people,
  roas,
}) => {
  return (
    <div className="w-full py-20 px-2">
      <div className=" max-w-[740px]  flex flex-col items-center mx-auto">
        <h2 className="text-adaSubtitle lg:text-adaSubtitleThird font-bold uppercase">
          {title}
        </h2>
        <p className="uppercase font-bold md:text-adaDesc">{subtitle1}</p>
        <p className="pt-2">{subtitle2}</p>
        <div className="pt-4">
          <h3 className="font-bold md:text-adaDesc pb-4">Efekty:</h3>
          <ul className="flex flex-col gap-[10px] mx-auto mb-10">
            {efects.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row">
                <span className="mr-2">✅</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold md:text-adaDesc pb-4">Dla kogo:</h3>
          <p className="flex flex-col md:flex-row">
            <span className="mr-2">✅</span>
            {forWhom}
          </p>
          <p className="pt-4">{forWhomInfo}</p>
        </div>
        <Button
          type="button"
          text={<span className="font-bold">{btn}</span>}
          textSize="md:text-adaSubtitle"
          btnStyle="md:w-[400px] md:h-[80px] bg-ada-pink2 my-20 mx-auto"
          url="/"
        />
      </div>
      <div className="mx-auto max-w-[800px]">
        <table>
          <tr>
            <td className="max-w-[500px]">
              <h4 className={h4Style}>Cel kampanii: </h4>
              <p className={pStyle}>{purpose}</p>
            </td>
            <td>
              <h4 className={h4Style}>Wydany budżet: </h4>
              <p className={pStyle}>{cost}</p>
            </td>
          </tr>
          <tr>
            <td className="max-w-[500px]">
              <h4 className={h4Style}>Czas trwania kampanii:</h4>
              <p className={pStyle}>{time}</p>
            </td>
            <td>
              <h4 className={h4Style}>Ilość zakupów:</h4>
              <p className={pStyle}>{amount}</p>
            </td>
          </tr>
          <tr>
            <td className="max-w-[500px]">
              <h4 className={h4Style}>Grupy docelowe:</h4>
              <p className={pStyle}>{groups}</p>
            </td>
            <td>
              <h4 className={h4Style}>Wartość zakupów:</h4>
              <p className={pStyle}>{value}</p>
            </td>
          </tr>
          <tr>
            <td className="max-w-[500px]">
              <h4 className={h4Style}>
                Liczba osób, która wypełniła formularz zapisu:{" "}
              </h4>
              <p className={pStyle}>{people}</p>
            </td>
            <td>
              <h4 className={h4Style}>ROAS: </h4>
              <p className={pStyle}>{roas}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
