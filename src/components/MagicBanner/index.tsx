import { Button } from "helpers/Button"
import React, { useState } from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import BannerBox from "./BannerBox"

const bannerContent = [
  {
    circleKey: "purpleCircle",
    iconKey: "calendarIcon",
    bgColor: "bg-ada-yellow3",
    description:
      "w 2024 widziałaś spadki zasięgów, a chcesz w 2025 roku sprzedawać swoje produkty cyfrowe i programy mentoringowe?",
  },
  {
    circleKey: "yellowCircle",
    iconKey: "questions",
    bgColor: "bg-ada-pink6",
    description:
      "zainwestowałaś budżet reklamowy, a zobaczyłaś gorsze rezultaty reklam niż oczekiwane?",
  },
  {
    circleKey: "pinkCircleFull",
    iconKey: "heart",
    bgColor: "bg-ada-purple2",
    description:
      "dwoiłaś się i troiłaś nad nagrywaniem stories oraz rolek, a chcesz widzieć zaangażowanie i efekty, bez wiecznej pogoni za algorytmem?",
  },
]

const magicBannerContent = [
  {
    circleKey: "purpleCircle",
    iconKey: "6-calender",
    bgColor: "bg-ada-pink7",
    price: (
      <div className="text-white flex flex-col text-center font-bold">
        <p className="text-adaSubtitleThird">291 zł</p>
        <p className="text-adaSubtitle">miesięcznie</p>
      </div>
    ),
    description: (
      <>
        <div className="text-ada-white mt-2 mb-2 border-t-2 border-ada-yellow2 ">
          <p>6 miesięcy</p>
          <p>razem: 1746 zł</p>
          <p>płatność jednorazowa</p>
        </div>
        <Button
          type="button"
          text="Wybieram"
          url="https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi"
          btnStyle="mt-4 bg-ada-newPurple text-white rounded-full px-8 py-3 text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
        />
      </>
    ),
    url: "https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi",
  },
  {
    circleKey: "purpleCircle",
    iconKey: "3-calender",
    bgColor: "bg-ada-magicYellow",
    price: (
      <div className="text-ada-pink7 flex flex-col text-center font-bold">
        <p className="text-adaSubtitleThird">302 zł</p>
        <p className="text-adaSubtitle">miesięcznie</p>
      </div>
    ),
    description: (
      <>
        <div className="text-ada-pink7 mt-2 mb-2 border-t-2 border-ada-pink7 ">
          <p>3 miesiące</p>
          <p>razem: 907 zł</p>
          <p>płatność jednorazowa</p>
        </div>
        <Button
          type="button"
          text="Wybieram"
          url="https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi"
          btnStyle="mt-4 bg-ada-newPurple text-white rounded-full px-8 py-3 text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
        />
      </>
    ),
    url: "https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi",
  },
  {
    circleKey: "purpleCircle",
    iconKey: "1-calender",
    bgColor: "bg-ada-pink8",
    price: (
      <div className="text-ada-pink7 flex flex-col text-center font-bold">
        <p className="text-adaSubtitleThird">333 zł</p>
        <p className="text-adaSubtitle">miesięcznie</p>
      </div>
    ),
    description: (
      <>
        <div className="text-ada-pink7 mt-2 mb-8 border-t-2 border-ada-pink7">
          <p>1 miesiąc</p>
          <p>płatność subskrypcyjna</p>
        </div>
        <Button
          type="button"
          text="Wybieram"
          url="https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi"
          btnStyle="mt-4 bg-ada-newPurple text-white rounded-full px-8 py-3 text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
        />
      </>
    ),
    url: "https://slowmarketing.mailingr.co/c/magic-pakiet-basic-rXx5?priceId=price_UikNAGssSyiK3qw7UfE6vSMi",
  },
]

const magicBannerContent2 = [
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-yellow3",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">📊</span> <br />{" "}
          <span className="font-bold uppercase">
            Twoje zasięgi spadają mimo świetnych produktów?
          </span>
          <br />W MAGIC nauczysz się, jak w miesiąc dotrzeć do tylu osób, do ilu
          docierałaś przez rok.
        </p>
      </>
    ),
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-purple2 text-ada-white",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">🤝</span> <br />{" "}
          <span className="font-bold uppercase">
            Tworzysz samodzielnie teksty, maile, landingi?
          </span>
          <br /> Skonsultuj swoje treści z copywriterką i zapytaj graficzki, co
          zrobić, aby projekt przyciągał wzrok
        </p>
      </>
    ),
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-pink6",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">🤨</span> <br />{" "}
          <span className="font-bold uppercase">
            Wyniki reklam nie są takie, jakich oczekiwałaś?
          </span>
          <br />
          Przyjdź na grupowe konsultacje w MAGIC, aby skonsultować plan
          działania ze specjalistkami, które spędzają w Managerze Reklam 5+
          godzin dziennie.
        </p>
      </>
    ),
    styles: "md:min-h-[390px] md:mt-[-30px] md:min-w-[496px]",
  },
]

const magicBannerContent3 = [
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-pink6",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">😮‍💨</span> <br />{" "}
          <span className="font-bold uppercase">
            Czujesz, że tracisz budżet reklamowy?
          </span>
          <br /> Skonsultuj optymalizację budżetu w zależności od etapu lejka i
          branży.
        </p>
      </>
    ),
    styles: "md:min-h-[390px] md:mt-[-30px]",
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-yellow3",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">💻</span> <br />{" "}
          <span className="font-bold uppercase">
            Twoje konto reklamowe zostało zablokowane?
          </span>
          <br />
          Dowiedz się, co zrobić w takiej sytuacji, nawet gdy support Mety
          rozkłada ręce
        </p>
      </>
    ),
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-purple2 text-ada-white",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">🤷‍♀️</span> <br />{" "}
          <span className="font-bold uppercase">
            Spędzasz godziny na tworzeniu contentu, a efekty wciąż nie są
            zadowalające?
          </span>
          <br /> Zamiast tworzyć nieskończone ilości treści na IG, dowiedz się
          jak wykorzystać algorytm Mety na korzyść swojego biznesu.
        </p>
      </>
    ),
  },
]

const MagicBanner1 = ({ version }: { version: number }): JSX.Element => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  return (
    <>
      {version == 1 && (
        <Section bgColor="bg-white" className="text-black">
          <div className="max-w-4xl mx-auto mb-8 md:mb-20 text-center">
            <Typography variant="h2">Czy Ty też masz tak, że...</Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {bannerContent.map((item, i) => (
              <BannerBox
                key={i}
                circleKey={item.circleKey}
                iconKey={item.iconKey}
                bgColor={item.bgColor}
                description={item.description}
              />
            ))}
          </div>
        </Section>
      )}
      {version == 2 && (
        <Section bgColor="bg-white" className="text-black" id="pakiety">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 pt-8 mx-auto"
            onMouseOver={handleMouseEnter}
          >
            {magicBannerContent.map((item, i) => (
              <div
                key={i}
                className={`${
                  hasAnimated
                    ? i % 2 === 0
                      ? "lg:animate-slideInFromLeft opacity-100"
                      : "lg:animate-slideInFromRight opacity-100"
                    : " "
                }`}
              >
                <BannerBox
                  zoom="scale-110"
                  key={i}
                  circleKey={item.circleKey}
                  iconKey={item.iconKey}
                  bgColor={item.bgColor}
                  price={item.price}
                  description={item.description}
                  url={item.url}
                />
              </div>
            ))}
          </div>
        </Section>
      )}
      {version == 3 && (
        <Section bgColor="bg-white" className="text-black">
          <Typography
            variant="h2"
            className="text-black leading-snug mb-6 text-center"
          >
            Rozpoznajesz te sytuacje?
          </Typography>
          <div
            className="grid md:grid-cols-2 gap-2 md:gap-8 pt-8"
            style={{ gridTemplateRows: "auto auto" }}
            onMouseOver={handleMouseEnter}
          >
            <div className="flex flex-col gap-2 md:gap-6">
              {magicBannerContent2.slice(0, 2).map((item, i) => (
                <BannerBox
                  key={i}
                  circleKey={item.circleKey}
                  iconKey={item.iconKey}
                  bgColor={`${item.bgColor} ${hasAnimated ? "lg:animate-slideInFromLeft opacity-100" : " "}`}
                  description={item.description}
                />
              ))}
            </div>
            <div className="row-span-2 flex items-center">
              {magicBannerContent2.slice(2, 3).map((item, i) => (
                <BannerBox
                  key={i}
                  circleKey={item.circleKey}
                  iconKey={item.iconKey}
                  bgColor={`${item.bgColor} ${
                    hasAnimated ? "lg:animate-slideInFromRight opacity-100" : ""
                  }`}
                  description={item.description}
                  styles={item.styles}
                />
              ))}
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 gap-2 md:gap-8 pt-3 md:pt-0"
            style={{ gridTemplateRows: "auto auto" }}
          >
            <div className="row-span-2 flex items-center">
              {magicBannerContent3.slice(0, 1).map((item, i) => (
                <BannerBox
                  key={i}
                  circleKey={item.circleKey}
                  iconKey={item.iconKey}
                  bgColor={`${item.bgColor} ${
                    hasAnimated ? "lg:animate-slideInFromLeft opacity-100" : " "
                  }`}
                  description={item.description}
                  styles={item.styles}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {magicBannerContent3.slice(1, 3).map((item, i) => (
                <BannerBox
                  key={i}
                  circleKey={item.circleKey}
                  iconKey={item.iconKey}
                  bgColor={`${item.bgColor} ${
                    hasAnimated
                      ? "lg:animate-slideInFromRight opacity-100"
                      : " "
                  }`}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <Typography variant="h2" className="text-ada-pink7 text-center pt-6">
            Rozumiemy to.
          </Typography>
          <Typography variant="body" className="text-black pt-8">
            Dlatego stworzyłyśmy MAGIC - wyjątkową społeczność kobiet, które
            chcą skutecznie reklamować się w Meta, ale bez stresu, że coś nie
            działa. Zamiast eksperymentów i niepewności, zyskujesz dostęp do
            merytorycznego wsparcia, sprawdzonych strategii i inspiracji, które
            realnie przekładają się na wyniki.
          </Typography>
          <div className="w-full flex justify-center">
            <Button
              type="button"
              text={
                <>
                  <span className="font-bold text-ada-yellow3 uppercase text-adaSubtitle">
                    TAK!
                  </span>
                  <br />
                  <span className="">Zwiększam sprzedaż dzięki reklamom!</span>
                </>
              }
              sectionId="pakiety"
              textSize="text-sm md:text-base"
              btnStyle="bg-ada-pink7 text-ada-white
                                font-semibold tracking-wide h-[80px] 
                                px-6 shadow-xl hover:opacity-90 rounded-full min-w-[130px] mt-4 m-auto"
            />
          </div>
        </Section>
      )}
    </>
  )
}

export default MagicBanner1
