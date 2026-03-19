import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import TypingAnimation from "helpers/TypingAnimation"
import React, { useState } from "react"
import MagicCollectiveForm from "../MagicCollectiveForm"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const COLLECTIVE_CONSULTATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWWFTLKbI4z7gIHU7-6gDcBcKLmlDP1QgB3EfODdomkHmpYw/viewform?usp=sharing&ouid=112663730817679195316"

const MagicCollectiveBanner = ({ version }: { version: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
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
                url="https://forms.gle/rLgDQQ6QeSLih7jZ9"
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
          <div className="flex flex-col lg:flex-row px-6 gap-10">
            <div>
              <div className="text-center mb-8">
                <span className="text-4xl">🧐</span>
              </div>
              <div className="bg-ada-white2 border-ada-orange border rounded-full py-3 px-6 text-center mb-8 max-w-[340px] mx-auto">
                <span className="font-normal text-ada-orange font-anton text-lg md:text-xl">
                  Rozpoznajesz się w tym?
                </span>
              </div>
              <div className="space-y-4 mb-12">
                <Typography variant="body" className="font-montserrat">
                  ❌ Masz super produkt, ale <b>nie wiesz</b> jak go sprzedać
                </Typography>
                <Typography variant="body" className="font-montserrat">
                  ❌ <b>Tracisz godziny</b> na social media zamiast rozwijać
                  biznes
                </Typography>
                <Typography variant="body" className="font-montserrat">
                  ❌<b> Nie wiesz,</b> czy inwestujesz w marketing{" "}
                  <b> skutecznie</b>
                </Typography>
                <Typography variant="body" className="font-montserrat">
                  ❌ Chcesz skalować, ale{" "}
                  <b> zespół in-house to za duży koszt</b>
                </Typography>
              </div>
            </div>
            <div>
              <div className="text-center mb-8">
                <span className="text-4xl">👀</span>
              </div>
              <div className="bg-ada-white2 border-ada-orange border rounded-full py-3 px-6 text-center mb-8 max-w-[360px] mx-auto">
                <span className="font-normal text-ada-orange font-anton text-lg md:text-xl">
                  Co jeśli powiemy Ci, że możesz mieć:
                </span>
              </div>
              <div className="space-y-4">
                <Typography variant="body" className="font-montserrat">
                  ✅ Profesjonalne kampanie <b>generujące stałe wyniki,</b>
                </Typography>
                <Typography variant="body" className="font-montserrat">
                  ✅ <b>Czas na rozwój produktów</b> zamiast "kręcenia się" w
                  marketingu
                </Typography>
                <Typography variant="body" className="font-montserrat">
                  ✅ <b>Przewidywalne wyniki i jasny ROI</b> z każdej złotówki
                </Typography>
                <Typography variant="body" className="font-montserrat">
                  ✅<b> Ekspertki,</b> którzy myślą o Twoim biznesie jak o swoim
                </Typography>
              </div>
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
            <div className="max-w-[438px] mx-auto px-10 md:px-0 space-y-3 md:space-y-3">
              <div className="mt-14 md:mt-4 text-adaMin md:text-adaStandard">
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
                    Prowadzą <b>ustabilizowany biznes online</b>
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
                    Zatrudniają minimum <b>1-2 osoby</b> w swoim zespole
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
            <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[600px] mx-auto mb-8">
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

            {/* Google Calendar Embed */}
            <div
              id="inline-widget-porozmawiajmy-o-wspolpracy"
              className="max-w-[800px] mx-auto bg-white p-2 md:p-3"
            >
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zcRiXUr4-wUE8kWad3VOUdAuWCYFT8Sx9MdThd_nrVecbrxdhp52S2M_iVeoZHU40tpiiuoEn?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                title="Bezpłatna konsultacja"
                className="block w-full"
              ></iframe>
            </div>
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
      {version == 11 && (
        <Section bgColor="" className="text-black" padding="mx-auto">
          <div className="flex justify-center">
            <StaticImage
              src={"../../images/magic-kolektyw.png"}
              alt=""
              placeholder="blurred"
              width={320}
              height={160}
              className="-mb-4 md:my-4"
            />
          </div>
        </Section>
      )}
      {version == 12 && (
        <Section bgColor="" className="text-black" padding="mt-12 mb-20">
          <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[400px] mx-auto uppercase">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              Krok 1
            </Typography>
          </div>
          <div className="text-adaDesc">
            <p className="font-bold mt-10 mb-4">
              Zainwestuj 10 minut i dowiedz się, jak inwestując do 5 tysięcy
              miesięcznie w marketing, możesz pozyskać 1000 nowych
              obserwujących, dodatkowe 1000 nowych osób na liście mailowej.{" "}
            </p>
            <p>
              Działając konsekwentnie, możesz wygenerować{" "}
              <b>2-, 4-, 8-, 15-krotny zwrot.</b> Bo żeby marketing działał, nie
              musisz mieć milionów. Wystarczy, że wiesz, gdzie mają pójść Twoje
              złotówki.
            </p>
          </div>
          <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 translate-y-6 z-2">
            <a
              href="https://forms.gle/VQHwrGBqMuSJtWS99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src={"../../images/magicBtn2.svg"}
                alt=""
                placeholder="blurred"
                width={80}
                height={80}
              />
            </a>
          </div>
        </Section>
      )}
      {version == 13 && (
        <Section bgColor="" className="text-black" padding="mt-20 mb-20 mx-4">
          <div className="border-ada-orange border rounded-3xl max-w-[400px] mx-auto bg-ada-magicGreen h-[200px]">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center"
            >
              MIEJSCE NA WIDEO
            </Typography>
          </div>
          <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 translate-y-6 z-2">
            <a
              href="https://forms.gle/VQHwrGBqMuSJtWS99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src={"../../images/magicBtn2.svg"}
                alt=""
                placeholder="blurred"
                width={80}
                height={80}
              />
            </a>
          </div>
        </Section>
      )}
      {version == 14 && (
        <Section bgColor="" className="text-black" padding="my-12">
          <div className="px-4">
            <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[400px] mx-auto uppercase">
              <Typography
                variant="h2"
                className="p-2 font-anton font-normal text-center text-ada-orange"
              >
                Krok 2
              </Typography>
            </div>
          </div>
          <div className="text-adaDesc px-4">
            <p className="font-bold mt-10 mb-4">
              Zacznij działać z profesjonalnym zespołem marketingowym. Zostaw
              dane - odezwiemy się i pokażemy Ci, jak to może wyglądać w Twoim
              biznesie.
            </p>
            <p className="mb-4">
              Rozmowa jest na luzie, bez zobowiązań. Dowiesz się, jak wygląda
              współpraca z zewnętrznym zespołem marketingowym, jakie masz
              możliwości i... czy to w ogóle dla Ciebie.
            </p>
            <p>
              Jeśli prowadzisz kursy online, mentoringi, oferujesz usługi
              cyfrowe i regularnie tworzysz content - jest spora szansa, że
              nasze podejście do reklam to coś dla Ciebie.
            </p>
          </div>
          <section id="ankieta">
            <div className="flex justify-center w-full mx-auto my-8">
              <MagicCollectiveForm />
            </div>
          </section>
        </Section>
      )}
      {version == 15 && (
        <Section
          bgColor=""
          className="text-black relative"
          padding="mx-1"
          aos={false}
        >
          <div className="flex justify-end">
            <StaticImage
              src={"../../images/magic-kolektyw.png"}
              alt="Ada Promis"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              width={250}
              quality={95}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full items-center gap-2 -mt-10 px-3">
            <div className="z-10">
              <StaticImage
                loading="eager"
                src="../../images/ada-show.webp"
                alt="Ada"
                placeholder="blurred"
                width={400}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div>
              <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[300px] uppercase">
                <Typography
                  variant="h1"
                  className="p-2 font-anton font-normal text-center text-ada-orange"
                >
                  Jeśli...
                </Typography>
              </div>
              <div className="text-adaDesc max-w-[600px]">
                <p className="font-bold mt-10 mb-4">
                  nie wiesz, jak skutecznie sprzedawać swój produkt cyfrowy, nie
                  jesteś sama!
                </p>
                <p className="mb-4">
                  Zobacz, jak przedsiębiorczynie takie jak Ty zwiększyły
                  przychody o 40-80% dzięki profesjonalnemu zespołowi
                  marketingowemu
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 pointer-events-none"
            style={{ zIndex: 80 }}
          >
            <StaticImage
              src={"../../images/magicBtn.svg"}
              alt=""
              placeholder="blurred"
              width={80}
              height={80}
            />
          </div>
        </Section>
      )}
      {version == 16 && (
        <Section
          bgColor=""
          className="text-black relative z-50 pointer-events-auto overflow-visible"
          padding="mt-12 pb-16"
          aos={false}
        >
          <a
            href="#konsultacja"
            className="kolektyw-cta relative block bg-ada-orange rounded-3xl max-w-[700px] mx-auto uppercase hover:opacity-90 pointer-events-auto"
            style={{ zIndex: 60 }}
          >
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-white2"
            >
              Umów się na bezpłatną konsultację
            </Typography>
          </a>
          <p className="text-adaDesc mt-10 mb-4 text-center max-w-[590px] mx-auto">
            Dołącz do <b>setek przedsiębiorczyń,</b> które tak jak Ty zbudowały{" "}
            <b>skuteczny marketing od zera,</b> a teraz na nim <b>zarabiają.</b>
          </p>
        </Section>
      )}
      {version == 17 && (
        <Section
          bgColor=""
          className="text-black relative z-0 overflow-visible"
          padding="pt-12 pb-8 px-4"
          aos={false}
        >
          <p className="text-adaDesc mb-4 text-center max-w-[600px] mx-auto">
            Z naszego podejścia, w którym pokazujemy jak{" "}
            <b>krok po kroku zbudować skuteczny marketing,</b> skorzystały już
            setki przedsiębiorczyń:
          </p>
          <div className="flex flex-col gap-8">
            <div className="bg-ada-magicPurple3 rounded-3xl max-w-[600px] mx-auto border-ada-orange border">
              <div className="md:flex gap-2 px-8 py-2 items-center justify-center">
                <Typography
                  variant="h2"
                  className="p-2 font-anton font-normal text-center text-ada-magicGreen"
                >
                  200+ kobiet
                </Typography>
                <p className="text-white">
                  <b>zwiększyło zyski</b> dzięki naszym kampaniom
                </p>
              </div>
            </div>
            <div className="bg-ada-magicPurple3 rounded-3xl max-w-[600px] mx-auto border-ada-orange border">
              <div className="md:flex gap-2 px-8 py-2 items-center justify-center">
                <div>
                  <Typography
                    variant="h2"
                    className="p-2 font-anton font-normal text-center text-ada-magicGreen"
                  >
                    2 tygodnie
                    <br />
                  </Typography>
                  <p className="text-white">działań płatnych</p>
                </div>
                <p className="p-2 font-anton font-normal text-center text-ada-magicGreen">
                  =
                </p>
                <p className="text-white">
                  efekty jak po <b>3 miesiącach działań organicznych</b>
                </p>
              </div>
            </div>
            <div className="bg-ada-magicPurple3 rounded-3xl max-w-[600px] mx-auto border-ada-orange border">
              <div className="md:flex gap-2 px-8 py-2 items-center justify-center">
                <Typography
                  variant="h2"
                  className="p-2 font-anton font-normal text-center text-ada-magicGreen"
                >
                  Maksymalne
                </Typography>
                <p className="text-white">
                  <b>wykorzystanie Twojego czasu</b> na marketing
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}
      {version == 18 && (
        <Section
          bgColor=""
          className="text-black"
          padding="mt-10 mb-10"
          id="konsultacja"
          aos={false}
        >
          <p className="text-adaDesc mt-10 mb-4 text-center max-w-[400px] mx-auto">
            <b>Dołącz do grona zadowolonych klientek, </b>które dzięki naszemu
            wsparciu rozwinęły swoje biznesy
          </p>
          <div className="flex justify-center w-full mx-auto">
            <MagicCollectiveForm />
          </div>
        </Section>
      )}
      {version == 19 && (
        <Section
          bgColor=""
          className="text-black overflow-hidden sm:mt-10"
          padding="py-8 px-4 md:px-8 flex justify-centeritems-center"
        >
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-8 text-center lg:text-start">
            <div className="w-full md:w-1/2 text-white">
              <TypingAnimation
                text="Cześć!"
                textStyle="text-adaSubtitleSecondary uppercase md:text-[80px] animate-bounce text-ada-magicGreen font-anton "
              />
              <h3 className="text-adaMin md:text-adaSubtitleSecondary pt-8 mt-4 font-bold  pb-6 tracking-widest">
                Nazywam się Adrianna Promis-Urbas
              </h3>
              <p className="pt-2 pb-2 text-adaMin md:text-adaNav tracking-widest">
                <b>Jestem przedsiębiorczynią.</b> Tworzę kampanie reklamowe,
                które zarabiają pieniądze.{" "}
                <b>
                  W swojej karierze wydałam na kampanie reklamowe sporo ponad 2
                  000 000 złotych,
                </b>{" "}
                a zarobiłam kilkanaście razy tyle!
              </p>
              <p className="pt-2 pb-2 text-adaMin md:text-adaNav tracking-widest">
                <b>
                  Moja specjalizacja to marki osobiste i małe kobiece biznesy
                </b>{" "}
                - dobrze znam i rozumiem wyzwania przedsiębiorczyń i chcę, aby
                reklamy ułatwiały codzienność, zapewniając stabilny przychód
                zamiast pochłaniać budżet.
              </p>
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
          <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 lg:-translate-y-6">
            <a href="#pakiety" aria-label="Przejdź do sekcji pakiety">
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
      {version == 20 && (
        <Section bgColor="" className="text-black" padding="my-12 px-3">
          <div className="bg-ada-white2 border-ada-orange border rounded-3xl max-w-[480px] mx-auto">
            <Typography
              variant="h2"
              className="p-2 font-anton font-normal text-center text-ada-orange"
            >
              Nasze wyniki w liczbach
            </Typography>
          </div>
          <div
            className="flex flex-col gap-20 py-10"
            onMouseOver={handleMouseEnter}
          >
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromLeft opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw1.webp"
                alt=""
                placeholder="blurred"
                width={1360}
                height={267}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromRight opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw2.webp"
                alt=""
                placeholder="blurred"
                width={1200}
                height={312}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromLeft opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw3.webp"
                alt=""
                placeholder="blurred"
                width={1360}
                height={420}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromRight opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw4.webp"
                alt=""
                placeholder="blurred"
                width={1360}
                height={360}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromLeft opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw5.webp"
                alt=""
                placeholder="blurred"
                width={1360}
                height={330}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromRight opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw6.webp"
                alt=""
                placeholder="blurred"
                width={1360}
                height={330}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div
              className={`${
                hasAnimated
                  ? "lg:animate-slideInFromLeft opacity-100"
                  : "lg:opacity-0"
              }`}
            >
              <StaticImage
                loading="eager"
                src="../../images/kolektyw7.webp"
                alt=""
                placeholder="blurred"
                width={1000}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </Section>
      )}
      {version == 21 && (
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
                <div className="bg-ada-white2 border-ada-orange border rounded-3xl px-6 py-3">
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
                  src={"../../images/kolektywInfo1.webp"}
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
                        Monice zależało, żeby jej konto na Instagramie
                        regularnie się rozwijało. Dzięki dobrze zaplanowanej
                        kampanii na pozyskanie obserwujących{" "}
                        <b>
                          w ciągu 6 miesięcy zyskała 9306 nowych obserwujących.
                          Dodatkowy efekt?43 osoby przesłały zapytania
                        </b>{" "}
                        o możliwość wykupienia zajęć językowych.
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Czas trwania kampanii:
                        </p>
                      </div>
                      <p className="text-sm">
                        6 miesięcy (styczeń-czerwiec 2025)
                      </p>
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
                      <p className="text-sm">5781,47 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba nowych obserwujących:
                        </p>
                      </div>
                      <p className="text-sm">9306</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba zapytań o zajęcia (dodatkowo):
                        </p>
                      </div>
                      <p className="text-sm">43</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 max-w-[740px] mx-auto">
                <StaticImage
                  src={"../../images/kolektywInfo1a.webp"}
                  alt="Case study 1"
                  placeholder="blurred"
                  formats={["auto", "webp"]}
                  className="mb-8"
                />
              </div>
            </div>
          </div>
        </Section>
      )}
      {version == 22 && (
        <Section bgColor="bg-ada-magicPink2" className="text-black py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-16">
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
                <div className="bg-ada-white2 border-ada-orange border rounded-3xl px-6 py-3">
                  <h3 className="font-anton font-normal text-center text-ada-orange text-xl md:text-2xl">
                    Case study kampanii z kampanii sprzedażowej
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
                  src={"../../images/kolektywInfo2.webp"}
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
                          Ilość zapisów:
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
              <div className="pt-4 max-w-[740px] mx-auto">
                <StaticImage
                  src={"../../images/kolektywInfo2a.webp"}
                  alt="Case study 1"
                  placeholder="blurred"
                  formats={["auto", "webp"]}
                  className="mb-8"
                />
              </div>
            </div>
          </div>
        </Section>
      )}
      {version == 23 && (
        <Section bgColor="bg-ada-magicGreen" className="text-black py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-16">
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
                <div className="bg-ada-white2 border-ada-orange border rounded-3xl px-6 py-3">
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
                  src={"../../images/kolektywInfo3.webp"}
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
                        sprzedaż kursu dla właścicieli lokalnych firm
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Czas trwania kampanii:
                        </p>
                      </div>
                      <p className="text-sm">
                        14 miesięcy (lipiec 2024 - wrzesień 2025)
                      </p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Grupy docelowe:
                        </p>
                      </div>
                      <p className="text-sm">
                        osoby zainteresowane marketingiem, właściciele lokalnych
                        biznesów
                      </p>
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
                      <p className="text-sm">55 858 zł</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba osób, które zapisały się na webinar:
                        </p>
                      </div>
                      <p className="text-sm">10 376</p>
                    </div>
                    <div>
                      <div className="mb-2">
                        <p className="font-bold bg-ada-purple3 text-white inline-block">
                          Liczba sprzedanych kursów:
                        </p>
                      </div>
                      <p className="text-sm">172, około 120 000 złotych</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 max-w-[740px] mx-auto">
              <StaticImage
                src={"../../images/kolektywInfo3a.webp"}
                alt="Case study 1"
                placeholder="blurred"
                formats={["auto", "webp"]}
                className="mb-8"
              />
            </div>
          </div>
        </Section>
      )}
    </>
  )
}

export default MagicCollectiveBanner
