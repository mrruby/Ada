import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import Card from "../shared/Card"
import { Button } from "helpers/Button"

const TimeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-4 text-3xl font-bold min-w-[60px] text-center">
    {children}
  </div>
)

const MagicDateBanner = () => {
  return (
    <Section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div className="max-w-[300px] text-black">
          <Typography variant="h2" className="mb-2">
            DATA I GODZINA
          </Typography>
          <Typography variant="body">
            Przestań wyrzucać pieniądze w błoto na reklamy, które nie działają.
            Dowiedz się, jak robić je porządnie i skutecznie już...
          </Typography>
        </div>

        {/* Right column */}
        <Card
          bgColor="bg-ada-yellow3"
          className="flex flex-col items-center justify-center"
        >
          {/* Date/time row */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <TimeBox>19</TimeBox>
            <span className="text-3xl font-bold">.</span>
            <TimeBox>01</TimeBox>
            <TimeBox>12</TimeBox>
            <span className="text-3xl font-bold">:</span>
            <TimeBox>00</TimeBox>
          </div>

          <Button
            type="button"
            text="Zapisuję się!"
            sectionId="webinar-form"
            textSize="text-sm md:text-base"
            btnStyle="uppercase bg-ada-pink2 text-ada-black 
                        font-semibold tracking-wide h-[48px] md:h-[60px] 
                        px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px]"
          />
        </Card>
      </div>
    </Section>
  )
}

export default MagicDateBanner
