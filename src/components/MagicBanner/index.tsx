import React from "react"
import BannerBox from "./BannerBox"
import Section from "../shared/Section"
import Typography from "../shared/Typography"
import { Button } from "helpers/Button"

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
    iconKey: "",
    bgColor: "bg-ada-yellow3",
    title: "Pakiet BASIC",
    description: (
      <>
        <p className="pb-2">
          ✅ Nieograniczony dostęp do wszystkich elementów społeczności
        </p>
        <p className="pb-2">
          <span className="text-ada-pink7 font-bold">
            dla pierwszych 10 osób:
          </span>{" "}
          <br />
          <span className="text-ada-pink7 font-bold"> 249 zł</span>{" "}
          brutto/miesięcznie <br />
          <span className="text-ada-pink7 font-bold">2490 zł </span>brutto/za
          cały rok
        </p>
        <p>
          <span className="font-bold">następnie:</span>
          <br />
          <span className="font-bold"> 269 zł</span> brutto/miesięcznie
          <br />
          <span className="font-bold"> 2990 zł</span> brutto/za cały rok
        </p>
        <button
          className="mt-4 bg-ada-newPurple text-white rounded-full px-8 py-3 text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
        >
          WYBIERAM
        </button>
      </>
    ),
    url: "https://www.mailingr.co/c/magic-pakiet-basic-rXx5",
  },
  {
    circleKey: "yellowCircle",
    iconKey: "",
    bgColor: "bg-ada-pink6",
    title: "Pakiet VIP",
    description: (
      <>
        <p className="pb-2">
          ✅ Nieograniczony dostęp do wszystkich elementów społeczności
        </p>
        <p className="pb-2">
          ✅ 1 h konsultacji 1:1 miesięcznie z wybraną specjalistką
        </p>
        <p className="pb-2">
          <span className="text-ada-pink7 font-bold">
            tylko 5 miejsc:
          </span>{" "}
          <br />
          <span className="text-ada-pink7 font-bold">749 zł</span>{" "}
          brutto/miesięcznie <br />
          <span className="text-ada-pink7 font-bold">8321 zł</span>{" "}
          brutto/za cały rok
        </p>
        <button
          className="mt-4 bg-ada-newPurple text-white rounded-full px-8 py-3 text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
        >
          WYBIERAM
        </button>
      </>
    ),
    url: "https://mailingr.co/c/magic-pakiet-vip-LdSc",
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
          <span className="font-bold">Patrzysz na swoje statystyki</span>
          <br /> i widzisz spadające zasięgi, mimo świetnych produktów?{" "}
        </p>
      </>
    ),
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-purple2",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">🤝</span> <br />{" "}
          <span className="font-bold">Potrzebujesz wsparcia w reklamach,</span>
          <br /> bo wyniki nie są takie, jakich oczekiwałaś?{" "}
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
          <span className="font-bold">
            Spędzasz godziny na tworzeniu contentu,{" "}
          </span>
          <br />a efekty wciąż nie są zadowalające?{" "}
        </p>
      </>
    ),
    styles: "md:min-h-[320px] md:mt-[-30px] md:min-w-[496px]",
  },
]

const magicBannerContent3 = [
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-yellow3",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">😮‍💨</span> <br />{" "}
          <span className="font-bold">
            Czujesz, że konkurencja zawsze jest o krok przed Tobą,
          </span>
          <br /> mimo Twojego ciężkiego wysiłku?{" "}
        </p>
      </>
    ),
    styles: "md:min-h-[320px] md:mt-[-30px]",
  },
  {
    circleKey: "",
    iconKey: "",
    bgColor: "bg-ada-purple2",
    description: (
      <>
        <p>
          <span className="text-adaSubtitleSecondary">💻</span> <br />{" "}
          <span className="font-bold">
            Szukasz sprawdzonej wiedzy i wsparcia
          </span>
          <br /> w rozwijaniu biznesu online?{" "}
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
          <span className="text-adaSubtitleSecondary">🤷‍♀️</span> <br />{" "}
          <span className="font-bold">
            Poświęcasz mnóstwo czasu na media społecznościowe,
          </span>
          <br /> ale nie widzisz tego przełożenia na sprzedaż?{" "}
        </p>
      </>
    ),
  },
]

const MagicBanner1 = ({ version }: { version: number }): JSX.Element => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12 pt-8 max-w-4xl mx-auto">
            {magicBannerContent.map((item, i) => (
              <BannerBox
                key={i}
                circleKey={item.circleKey}
                iconKey={item.iconKey}
                bgColor={item.bgColor}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
        </Section>
      )}
      {version == 3 && (
        <Section bgColor="bg-white" className="text-black">
          <Typography variant="h2" className="text-black leading-snug mb-6">
            Czy Ty też masz tak, że...
          </Typography>
          <div
            className="grid md:grid-cols-2 gap-2 md:gap-8 pt-8"
            style={{ gridTemplateRows: "auto auto" }}
          >
            <div className="flex flex-col gap-2 md:gap-6">
              {magicBannerContent2.slice(0, 2).map((item, i) => (
                <BannerBox
                  key={i}
                  circleKey={item.circleKey}
                  iconKey={item.iconKey}
                  bgColor={item.bgColor}
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
                  bgColor={item.bgColor}
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
                  bgColor={item.bgColor}
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
                  bgColor={item.bgColor}
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
                  <span className="">
                    Chcę wreszcie pokonać reklamowy chaos!
                  </span>
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
