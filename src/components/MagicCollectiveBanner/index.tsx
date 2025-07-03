import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useEffect } from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

declare global {
  interface Window {
    Koalendar: any
  }
}

const MagicCollectiveBanner = ({
  version,
}: {
  version: number
}): JSX.Element => {
  // Load Koalendar script for version 5
  useEffect(() => {
    if (version === 5) {
      // Load Koalendar script
      const script1 = document.createElement("script")
      script1.innerHTML = `window.Koalendar=window.Koalendar||function(){(Koalendar.props=Koalendar.props||[]).push(arguments)};`
      document.body.appendChild(script1)

      const script2 = document.createElement("script")
      script2.src = "https://koalendar.com/assets/widget.js"
      script2.async = true
      document.body.appendChild(script2)

      script2.onload = () => {
        // Initialize Koalendar after script loads
        if (window.Koalendar) {
          window.Koalendar("inline", {
            url: "https://koalendar.com/e/porozmawiajmy-o-wspolpracy",
            selector: "#inline-widget-porozmawiajmy-o-wspolpracy",
          })
        }
      }

      // Cleanup
      return () => {
        document.body.removeChild(script1)
        document.body.removeChild(script2)
      }
    }
  }, [version])
  const scrollToWebinarForm = () => {
    const element = document.getElementById("webinar-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPackages = () => {
    const element = document.getElementById("pakiety")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {version == 1 && (
        <Section
          bgColor="bg-magic-banner1"
          className="text-black overflow-hidden lg:backdrop:h-[756px] flex justify-center my-20 sm:max-w-[410px] md:max-w-[510px] lg:max-w-[710px]  mx-auto"
          padding="py-8 px-2 md:px-12"
        >
          <div className="max-w-[350px] pl-[24px]">
            <Typography
              variant="h3"
              className="mt-11 font-anton font-bold text-center"
            >
              Zwiększ przychody o{" "}
              <span className="text-ada-orange">40-80%</span> dzięki
              profesjonalnemu zespołowi marketingowemu
            </Typography>
            <Typography
              variant="body"
              className="mt-6 mb-8 font-courier leading-[32px] md:leading-[36px] text-center"
            >
              Dla przedsiębiorczyń prowadzących kursy online, mentoringi, usługi
              cyfrowe
            </Typography>
            <div className="space-y-4 mb-8 text-center">
              <Typography
                variant="body"
                className="font-courier leading-[32px] md:leading-[36px]"
              >
                ✅ Gotowe kampanie sprzedażowe w{" "}
                <span className="font-bold">14 dni</span>
              </Typography>
              <Typography
                variant="body"
                className="font-courier leading-[32px] md:leading-[36px]"
              >
                ✅ Oszczędność <span className="font-bold">20-30h</span>{" "}
                tygodniowo Twojego czasu
              </Typography>
            </div>
            <div className="flex justify-center mt-8">
              <Button
                type="button"
                text={
                  <span className="font-normal text-ada-orange font-anton text-xs md:text-sm">
                    SPRAWDŹ, JAK TO DZIAŁA - BEZPŁATNA KONSULTACJA
                  </span>
                }
                url="https://forms.gle/21QLQXWozG9EYQvt8"
                textSize="text-xs md:text-sm"
                btnStyle="bg-ada-white2
                      tracking-wide h-[44px] md:h-[52px] 
                      px-4 md:px-6 hover:opacity-90 rounded-full min-w-[130px] border-ada-orange border"
              />
            </div>
          </div>
        </Section>
      )}
      {version == 2 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden flex justify-center mb-20"
          padding="py-8 px-4 md:px-8"
        >
          <div className="max-w-[510px] px-6">
            <div className="text-center mb-8">
              <span className="text-4xl">🧐</span>
            </div>
            <div className="bg-ada-white2 border-ada-orange border rounded-full py-3 px-6 text-center mb-8">
              <span className="font-normal text-ada-orange font-anton text-lg md:text-xl">
                Znasz to?
              </span>
            </div>
            <div className="space-y-4 mb-12">
              <Typography variant="body" className="font-courier">
                ❌ Masz super produkt, ale nie wiesz jak go sprzedać
              </Typography>
              <Typography variant="body" className="font-courier">
                ❌ Tracisz godziny na social media zamiast rozwijać biznes
              </Typography>
              <Typography variant="body" className="font-courier">
                ❌ Nie wiesz, czy inwestujesz w marketing skutecznie
              </Typography>
              <Typography variant="body" className="font-courier">
                ❌ Chcesz skalować, ale zespół in-house to za duży koszt
              </Typography>
            </div>
            <div className="text-center mb-8">
              <span className="text-4xl">👀</span>
            </div>
            <div className="bg-ada-white2 border-ada-orange border rounded-full py-3 px-6 text-center mb-8">
              <span className="font-normal text-ada-orange font-anton text-lg md:text-xl">
                Co jeśli powiemy Ci, że możesz mieć:
              </span>
            </div>
            <div className="space-y-4">
              <Typography variant="body" className="font-courier">
                ✅ Profesjonalne kampanie generujące stałe wyniki
              </Typography>
              <Typography variant="body" className="font-courier">
                ✅ Czas na rozwój produktów zamiast "kręcenia się" w marketingu
              </Typography>
              <Typography variant="body" className="font-courier">
                ✅ Przewidywalne wyniki i jasny ROI z każdej złotówki
              </Typography>
              <Typography variant="body" className="font-courier">
                ✅ Ekspertki, którzy myślą o Twoim biznesie jak o swoim
              </Typography>
            </div>
          </div>
        </Section>
      )}
      {version == 3 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-centeritems-center"
        >
          <div className="mx-auto md:w-[563px] bg-magic-banner2 min-h-[400px] md:h-[460px] pb-4">
            <div className="max-w-[438px] pt-8 md:pt-10 pl-[80px] md:pl-[130px]">
              <TypingAnimation
                text="Dlaczego MAGIC?"
                textStyle="mt-[6px] md:m-5 text-ada-orange font-anton font-normal px-4 md:px-0 text-adaNav md:text-adaBase"
              />
            </div>
            <div className="max-w-[438px] mx-auto px-10 md:px-0 space-y-3 md:space-y-4">
              <div className="mt-14 md:mt-6 text-adaMin md:text-adaStandard">
                🤝 <span className="font-bold">Działamy jako Twój zespół</span>{" "}
                - jesteśmy stałym partnerem w rozwoju Twojego biznesu
              </div>
              <div className="text-adaMin md:text-adaStandard">
                🏅{" "}
                <span className="font-bold">Pracujemy na poziomie premium</span>
                - skupiamy się na długoterminowych relacjach i mierzalnych
                rezultatach
              </div>
              <div className="text-adaMin md:text-adaStandard">
                👩‍💻{" "}
                <span className="font-bold">
                  Łączymy strategię z wykonaniem
                </span>
                - nie tylko doradzamy, ale przede wszystkim wdrażamy i
                zarządzamy
              </div>
              <div className="text-adaMin md:text-adaStandard">
                🧠 <span className="font-bold">Jesteśmy ADHD friendly</span> -
                rozumiemy dynamikę kreatywnego umysłu i wspólnie z Tobą
                wypracujemy najlepszy system współpracy
              </div>
            </div>
          </div>
        </Section>
      )}
      {version == 4 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-centeritems-center"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="w-full md:w-1/2 mt-8 animate-bounce">
              <div className="bg-ada-magicGrey border-ada-orange border rounded-3xl max-w-[360px] mx-auto">
                <Typography
                  variant="h2"
                  className="p-2 font-anton font-normal text-center text-ada-orange"
                >
                  Dla kogo jest MAGIC?
                </Typography>
              </div>
              <Typography variant="body" className="mt-4 mb-6 text-center">
                Nasze usługi są idealnym rozwiązaniem <br />
                dla przedsiębiorczyń, które:
              </Typography>
              <div className="max-w-[438px] mx-auto px-2 md:px-0">
                <div className="flex gap-2">
                  <div className="w-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                      className="animate-spin-slow"
                    />
                  </div>
                  <p className="mt-2">
                    Prowadzą <b>biznes online</b>
                    <br /> (kursy, mentoring, usługi)
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[40px] h-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                      className="animate-spin-slow"
                    />
                  </div>
                  <p className="mt-2">
                    <b>Regularnie publikują</b> treści <b>i budują</b>
                    <br /> swoją społeczność
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[40px] h-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                      className="animate-spin-slow"
                    />
                  </div>
                  <p className="mt-2">
                    Współpracują z <b>podwykonawcami</b>,<br /> np. wirtualnymi
                    asystentkami
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[40px] h-[40px] mt-4">
                    <StaticImage
                      src={"../../images/magicFlower.svg"}
                      alt=""
                      placeholder="blurred"
                      width={40}
                      height={40}
                      className="animate-spin-slow"
                    />
                  </div>
                  <p className="mt-2">
                    <b>Są gotowe na skalowanie biznesu</b> <br />
                    poprzez profesjonalny marketing
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end md:-mt-6 mb-4">
              <StaticImage
                src={"../../images/magic-hero2.webp"}
                alt="Ada Promis"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                width={410}
                height={592}
                quality={95}
              />
            </div>
          </div>
          <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-6">
            <a href="#umawiam-spotkanie">
              <StaticImage
                src={"../../images/magicBtn.svg"}
                alt=""
                placeholder="blurred"
                width={80}
                height={80}
              />
            </a>
          </div>
        </Section>
      )}
      {version == 7 && (
        <Section
          bgColor=""
          className="text-black"
          padding="py-12"
          id="umawiam-spotkanie"
        >
          <div className="max-w-6xl mx-auto">
            {/* Title similar to previous section */}
            <div className="bg-white border-ada-orange border rounded-3xl max-w-[600px] mx-auto mb-8">
              <Typography
                variant="h2"
                className="p-2 font-anton font-normal text-center text-ada-orange"
              >
                Rozpocznij współpracę z MAGIC
              </Typography>
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <Typography variant="body" className="font-bold mb-6">
                Umów bezpłatną rozmowę wstepną, podczas której:
              </Typography>
              <ul className="max-w-[600px] mx-auto text-left space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>
                    Dowiesz się dokładnie, ile możesz zyskać i jak to osiągnąć
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>
                    Nawet jeśli nie zdecydujesz się na współpracę - wyjdziesz z
                    planem działania
                  </span>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="flex justify-center mb-8">
              <Button
                type="button"
                text={
                  <span className="font-bold text-ada-white uppercase">
                    Umawiam spotkanie
                  </span>
                }
                sectionId="inline-widget-porozmawiajmy-o-wspolpracy"
                textSize="text-sm md:text-base"
                btnStyle="bg-ada-orange tracking-wide h-[46px] 
                         px-6 hover:opacity-90 rounded-full min-w-[200px]"
              />
            </div>

            {/* Koalendar Embed */}
            <div
              id="inline-widget-porozmawiajmy-o-wspolpracy"
              className="max-w-[800px] mx-auto"
            ></div>
          </div>
        </Section>
      )}
      {version == 5 && (
        <Section bgColor="" className="text-black" padding="my-12">
          <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[480px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              Dlaczego warto wybrać MAGIC?
            </Typography>
          </div>
        </Section>
      )}
      {version == 6 && (
        <Section bgColor="" padding="mt-2 md:-mt-4 mb-6" className="text-black">
          <div className="flex flex-col md:flex-row">
            <ul className="max-w-[438px] mx-auto px-8 md:px-0 list-none">
              <li className="md:mb-4 md:mt-10 flex items-start">
                <span className="mr-2">✅</span>
                <span>
                  <b>Oszczędzasz czas</b> - nie musisz zarządzać marketingiem
                  samodzielnie
                </span>
              </li>
              <li className="md:mb-4 flex items-start">
                <span className="mr-2">✅</span>
                <span>
                  <b>Redukujesz koszty </b>- zewnętrzny zespół to niższy wydatek
                  niż budowa działu in-house
                </span>
              </li>
            </ul>
            <ul className="max-w-[438px] mx-auto px-8 md:px-0 list-none">
              <li className="md:mb-4 md:mt-10 flex items-start">
                <span className="mr-2">✅</span>
                <span>
                  <b>Zyskujesz ekspertyzę</b> - pracujesz z zespołem
                  specjalistów z różnych dziedzin
                </span>
              </li>
              <li className="md:mb-4 flex items-start">
                <span className="mr-2">✅</span>
                <span>
                  <b>Skupiasz się na tym, co kochasz</b> - my zajmujemy się
                  marketingiem, Ty rozwijasz swój core business
                </span>
              </li>
            </ul>
          </div>
        </Section>
      )}
      {version == 9 && (
        <Section bgColor="" className="text-black text-center my-10">
          <div className="bg-ada-magicGreen border border-ada-orange p-4 md:py-8 md:px-12 rounded-3xl max-w-[800px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              MAGIC to nie tylko nazwa
            </Typography>
            <p>
              - to <b>filozofia działania</b> oparta na współpracy, kreatywności
              i mierzalnych efektach. <b>Skontaktuj się z nami</b> i przekonaj
              na własne oczy.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              type="button"
              text={
                <span className="text-ada-white font-bold uppercase">
                  Chcę dowiedzieć się, jak możecie mi pomóc
                </span>
              }
              sectionId="umawiam-spotkanie"
              textSize="text-sm"
              btnStyle="bg-ada-orange tracking-wide md:h-[46px] 
                       px-6 hover:opacity-90 rounded-full max-w-[240px] md:min-w-[280px]"
            />
          </div>
        </Section>
      )}
      {version == 8 && (
        <Section bgColor="bg-ada-magicGreen" className="text-black py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-16">
            {/* Case Study 1 */}
            <div>
              {/* Title with decorative images */}
              <div className="flex items-center justify-center mb-8">
                <StaticImage
                  src={"../../images/magicSign.svg"}
                  alt=""
                  placeholder="blurred"
                  width={50}
                  height={50}
                  className="hidden md:block animate-spin-slow mr-5"
                />
                <div className="bg-white border-ada-orange border rounded-3xl px-6 py-3">
                  <h3 className="font-anton font-normal text-center text-ada-orange text-xl md:text-2xl">
                    Case study z kampanii z listą mailową
                  </h3>
                </div>
                <StaticImage
                  src={"../../images/magicSign.svg"}
                  alt=""
                  placeholder="blurred"
                  width={50}
                  height={50}
                  className="hidden md:block animate-spin-slow ml-5"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <StaticImage
                  src={"../../images/case-study-1-original.webp"}
                  alt="Case study 1"
                  placeholder="blurred"
                  formats={["auto", "webp"]}
                  className="mb-8 rounded-lg shadow-lg"
                />
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 pl-4">
                  {/* Left column */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Cel kampanii:
                        </p>
                      </div>
                      <p className="text-sm">
                        kampania z celem zapis na listę mailową; po dołączeniu
                        subskrybenci otrzymują one time offer na dostęp do
                        platformy kursowej
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Czas trwania kampanii:
                        </p>
                      </div>
                      <p className="text-sm">2 miesiące</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Grupy docelowe:
                        </p>
                      </div>
                      <p className="text-sm">
                        różne grupy zimne bazując na zainteresowaniach,
                        lookalike, grupa ciepła
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba osób, która wypełniła formularz zapisu:
                        </p>
                      </div>
                      <p className="text-sm">1949</p>
                    </div>
                  </div>
                  {/* Right column */}
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Wydany budżet:
                        </p>
                      </div>
                      <p className="text-sm">6892,61 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Ilość zakupów:
                        </p>
                      </div>
                      <p className="text-sm">28 x 2499 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Wartość zakupów:
                        </p>
                      </div>
                      <p className="text-sm">69 972 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          ROAS:
                        </p>
                      </div>
                      <p className="text-sm">10,15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div>
              {/* Title with decorative images */}
              <div className="flex items-center justify-center mb-8">
                <StaticImage
                  src={"../../images/magicSign.svg"}
                  alt=""
                  placeholder="blurred"
                  width={50}
                  height={50}
                  className="hidden md:block animate-spin-slow mr-5"
                />
                <div className="bg-white border-ada-orange border rounded-3xl px-6 py-3">
                  <h3 className="font-anton font-normal text-center text-ada-orange text-xl md:text-2xl">
                    Case study z kampanii kierującej na Instagrama
                  </h3>
                </div>
                <StaticImage
                  src={"../../images/magicSign.svg"}
                  alt=""
                  placeholder="blurred"
                  width={50}
                  height={50}
                  className="hidden md:block animate-spin-slow ml-5"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <StaticImage
                  src={"../../images/case-study-2-original.webp"}
                  alt="Case study 2"
                  placeholder="blurred"
                  formats={["auto", "webp"]}
                  className="mb-8 rounded-lg shadow-lg"
                />
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 pl-4">
                  {/* Left column */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Cel kampanii:
                        </p>
                      </div>
                      <p className="text-sm">
                        budowanie świadomości marki, wzrost liczby obserwujących
                        i zaangażowania na profilu.
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Czas trwania kampanii:
                        </p>
                      </div>
                      <p className="text-sm">5 miesięcy</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Grupy docelowe:
                        </p>
                      </div>
                      <p className="text-sm">
                        jedna, najlepsza, wybrana na podstawie wyników z
                        poprzednich miesięcy
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba nowych obserwujących:
                        </p>
                      </div>
                      <p className="text-sm">11 125</p>
                    </div>
                  </div>
                  {/* Right column */}
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Wydany budżet:
                        </p>
                      </div>
                      <p className="text-sm">4810,98 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Ilość zapisów:
                        </p>
                      </div>
                      <p className="text-sm">40</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Koszt pozyskania kontaktu:
                        </p>
                      </div>
                      <p className="text-sm">4,95 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Zysk:
                        </p>
                      </div>
                      <p className="text-sm">
                        10800 zł miesięcznie (zakładając, połowa osób decyduje
                        się na skorzystanie z usługi)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div>
              {/* Title with decorative images */}
              <div className="flex items-center justify-center mb-8">
                <StaticImage
                  src={"../../images/magicSign.svg"}
                  alt=""
                  placeholder="blurred"
                  width={50}
                  height={50}
                  className="hidden md:block animate-spin-slow mr-5"
                />
                <div className="bg-white border-ada-orange border rounded-3xl px-6 py-3">
                  <h3 className="font-anton font-normal text-center text-ada-orange text-xl md:text-2xl">
                    Case study z kampanii sprzedażowej
                  </h3>
                </div>
                <StaticImage
                  src={"../../images/magicSign.svg"}
                  alt=""
                  placeholder="blurred"
                  width={50}
                  height={50}
                  className="hidden md:block animate-spin-slow ml-5"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <StaticImage
                  src={"../../images/case-study-3-original.webp"}
                  alt="Case study 3"
                  placeholder="blurred"
                  formats={["auto", "webp"]}
                  className="mb-8 rounded-lg shadow-lg"
                />
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 pl-4">
                  {/* Left column */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Cel kampanii:
                        </p>
                      </div>
                      <p className="text-sm">
                        kampania sprzedażowa podczas akcji promocyjnej
                        (remarketing)
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Czas trwania kampanii:
                        </p>
                      </div>
                      <p className="text-sm">5 dni</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Grupy docelowe:
                        </p>
                      </div>
                      <p className="text-sm">
                        osoby zapisane na newsletter (kampania na listę mailową
                        here!👋) oraz osoby odwiedzające sklep w ostatnim
                        miesiącu
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba osób, która wypełniła formularz zapisu:
                        </p>
                      </div>
                      <p className="text-sm">1115</p>
                    </div>
                  </div>
                  {/* Right column */}
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Wydany budżet:
                        </p>
                      </div>
                      <p className="text-sm">203,72 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Ilość zakupów:
                        </p>
                      </div>
                      <p className="text-sm">21</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Wartość zakupów:
                        </p>
                      </div>
                      <p className="text-sm">3900,80 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          ROAS:
                        </p>
                      </div>
                      <p className="text-sm">19,15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}
      {version == 10 && (
        <Section bgColor="" className="text-black text-center my-16">
          <div className="flex justify-center">
            <Button
              type="button"
              text={
                <span className="font-bold text-ada-white uppercase">
                  Umawiam bezpłatną konsultację
                </span>
              }
              sectionId="umawiam-spotkanie"
              textSize="text-sm md:text-base"
              btnStyle="bg-ada-orange tracking-wide h-[50px] md:h-[56px] 
                       px-8 md:px-10 hover:opacity-90 rounded-full min-w-[250px]"
            />
          </div>
        </Section>
      )}
    </>
  )
}

export default MagicCollectiveBanner
