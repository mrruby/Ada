import React from "react"
import Section from "../shared/Section"

interface TableRow {
  metric: string
  budget1_5k: string
  budget2_5k: string
  budget5k: string
}

const tableData: TableRow[] = [
  {
    metric: "Zyskasz tylu nowych obserwatorów",
    budget1_5k: "650 (jeden za 0,35zł)",
    budget2_5k: "2200 (jeden za 0,24zł)",
    budget5k: "3300 (jeden za 0,19zł)",
  },
  {
    metric: "Na Twoją listę mailową zapisze się tyle osób",
    budget1_5k: "280 (jeden za 3,50zł)",
    budget2_5k: "480 (jeden za 2,90zł)",
    budget5k: "1200 (jeden za 2,50zł)",
  },
  {
    metric: "Tyle wyniesie przychód z kampanii",
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
            Zobacz, co możemy zrobić w miesiąc z budżetem:
          </span>
        </div>

        <div className="overflow-x-auto border border-ada-orange">
          <table className="w-full bg-ada-white2">
            <thead>
              <tr>
                <th className="text-left p-4 font-bold text-black border-b border-r border-ada-orange"></th>
                <th className="text-center p-4 font-bold text-ada-orange border-b border-r border-ada-orange">
                  1,5k
                </th>
                <th className="text-center p-4 font-bold text-ada-orange border-b border-r border-ada-orange">
                  2,5k
                </th>
                <th className="text-center p-4 font-bold text-ada-orange border-b border-ada-orange">
                  5k
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
