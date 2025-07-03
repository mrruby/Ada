import React from "react"
import Section from "../shared/Section"

const tableData = [
  {
    metric: "Ilość",
    budget1_5k: "650",
    budget2_5k: "2200",
    budget5k: "3300",
  },
  {
    metric: "Ilość zapisów na webinar",
    budget1_5k: "280",
    budget2_5k: "480",
    budget5k: "1200",
  },
  {
    metric: "Ilość przesłanych kontaktów",
    budget1_5k: "5-15",
    budget2_5k: "30-45",
    budget5k: "120",
  },
  {
    metric: "Ilość zakupów",
    budget1_5k: "9500 zł",
    budget2_5k: "17000 zł",
    budget5k: "54000 zł",
  },
]

const MagicResultsTable = (): JSX.Element => {
  return (
    <Section bgColor="bg-ada-magicGreen" padding="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-ada-white2 border-ada-orange border rounded-full py-3 px-6 text-center mb-12 max-w-md mx-auto">
          <span className="font-normal text-ada-orange font-anton text-lg md:text-xl">
            Nasze wyniki w liczbach
          </span>
        </div>

        <div className="overflow-x-auto border border-ada-orange">
          <table className="w-full bg-ada-white2">
            <thead>
              <tr>
                <th className="text-left p-4 font-bold text-black border-b border-r border-ada-orange"></th>
                <th className="text-center p-4 font-bold text-ada-orange border-b border-r border-ada-orange">
                  Budżet 1,5k
                </th>
                <th className="text-center p-4 font-bold text-ada-orange border-b border-r border-ada-orange">
                  Budżet 2,5k
                </th>
                <th className="text-center p-4 font-bold text-ada-orange border-b border-ada-orange">
                  Budżet 5k
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index < tableData.length - 1
                      ? "border-b border-ada-orange"
                      : ""
                  }
                >
                  <td className="p-4 font-bold text-black border-r border-ada-orange">
                    {row.metric}
                  </td>
                  <td className="text-center p-4 text-black border-r border-ada-orange">
                    {row.budget1_5k}
                  </td>
                  <td className="text-center p-4 text-black border-r border-ada-orange">
                    {row.budget2_5k}
                  </td>
                  <td className="text-center p-4 text-black">{row.budget5k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}

export default MagicResultsTable
