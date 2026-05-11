import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React, { useState } from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicWhy = ({ part }: { part: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true)
    }
  }

  return (
    <Section bgColor="bg-transparent" padding="py-8 md:py-12 px-6">
      {part == 1 && (
        <div className="w-full text-white -mb-8">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            <span className="text-ada-yellow3">MAGIC </span>
            jest dla...
          </Typography>
        </div>
      )}
      {part == 2 && (
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="w-full text-black">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="max-w-md">
                <Typography
                  variant="h2"
                  className="mb-8 text-center animate-bounce"
                >
                  🧑‍🎓 Przedsiębiorczyń:
                </Typography>
                <ul>
                  <li className="mb-3">
                    ✅ dla osób, które
                    <span className="font-bold">
                      {" "}
                      jeszcze nie prowadziły reklam
                    </span>{" "}
                    i potrzebują pewnego startu w świecie płatnej promocji
                  </li>
                  <li className="mb-3">
                    ✅ dla tych, którzy{" "}
                    <span className="font-bold">
                      boją się, że źle klikną i stracą budżet reklamowy
                    </span>{" "}
                    na nieefektywnych kampaniach
                  </li>
                  <li className="mb-3">
                    ✅ które mają{" "}
                    <span className="font-bold">
                      pierwsze reklamy za sobą (lub klikały w &quot;promuj
                      post&quot;)
                    </span>{" "}
                    ale nie są zadowolone z wyników
                  </li>
                  <li className="mb-3">
                    ✅ które do tej pory
                    <span className="font-bold">
                      {" "}
                      polegały głównie na działaniach organicznych
                    </span>{" "}
                    i chcą bezpiecznie wejść w reklamy
                  </li>
                  <li>
                    ✅{" "}
                    <span className="font-bold">
                      {" "}
                      dla osób, które zlecały reklamy na zewnątrz,
                    </span>{" "}
                    ale chcą przejąć kontrolę nad swoim budżetem reklamowym
                  </li>
                </ul>
              </div>
              <div className="max-w-md">
                <Typography
                  variant="h2"
                  className="mb-8 text-center animate-bounce"
                >
                  🧑‍🎓 Marketerek:
                </Typography>
                <ul>
                  <li className="mb-3">
                    ✅ które chcą
                    <span className="font-bold">
                      {" "}
                      poznać najnowsze trendy i narzędzia reklamowe,
                      wyprzedzając konkurencję{" "}
                    </span>
                  </li>
                  <li className="mb-3">
                    ✅{" "}
                    <span className="font-bold">
                      dla social media managerek, wirtualnych asystentek,
                    </span>{" "}
                    które otrzymują zapytania o reklamy i{" "}
                    <span className="font-bold">
                      chcą zarabiać na prowadzeniu kampanii{" "}
                    </span>
                  </li>
                  <li className="mb-3">
                    ✅ dla tych, którzy
                    <span className="font-bold">
                      {" "}
                      chcą nauczyć się lepiej gospodarować budżetem
                    </span>{" "}
                    i optymalizować koszty pozyskania klienta
                  </li>
                  <li className="mb-3">
                    ✅ które chcą{" "}
                    <span className="font-bold">
                      {" "}
                      skonsultować swoje wyniki
                    </span>{" "}
                    i dowiedzieć się, jak je poprawić
                  </li>
                  <li className="mb-3">
                    ✅ dla tych, którzy
                    <span className="font-bold">
                      {" "}
                      już prowadzą reklamy i chcą robić to lepiej,
                    </span>{" "}
                    osiągając wyższe ROAS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {part == 3 && (
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-ada-black -mb-8">
            <Typography
              variant="h1"
              className="mb-8 text-center animate-bounce"
            >
              Jak wygląda przykładowy miesiąc w
              <span className="text-ada-pink7"> MAGIC </span>?
            </Typography>
          </div>
          <StaticImage
            loading="eager"
            src="../../images/section.webp"
            alt=""
            placeholder="blurred"
            width={992}
            height={536}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
      )}
      {part == 4 && (
        <div className="flex flex-col items-center gap-4 text-ada-black">
          <Typography variant="h1" className="text-center animate-bounce ">
            Zobacz przykładowe pytania i odpowiedzi!
          </Typography>
          <StaticImage
            loading="eager"
            src="../../images/pyt-odp.webp"
            alt=""
            placeholder="blurred"
            width={500}
            formats={["auto", "webp", "avif"]}
            quality={75}
            className="max-w-4xl"
          />
          <Button
            type="button"
            text={<span className="!font-extrabold"> WCHODZĘ W TO!</span>}
            sectionId="magic-package"
            textSize="text-xs md:text-adaSubtitleSecondary uppercase text-black"
            btnStyle="bg-ada-magicPurple4 tracking-wide p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl mt-4"
          />
        </div>
      )}
      {part == 5 && (
        <div className="w-full text-white -mb-8">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            Co otrzymasz w <span className="text-ada-yellow3">MAGIC:</span>
          </Typography>
        </div>
      )}
      {part == 6 && (
        <div className="w-full text-black mb-8">
          <ul className="mx-auto max-w-lg">
            <li className="mb-3">
              👩‍💻 <span className="font-bold">konsultacje pisemne</span> z
              ekspertkami
            </li>
            <li className="mb-3">
              <span className="font-bold">🎥 materiały szkoleniowe video</span>{" "}
              z ustawiania kampanii reklamowych i nie tylko
            </li>
            <li className="mb-3">
              🚀 dostęp do{" "}
              <span className="font-bold">wewnętrznej bazy wiedzy</span>
            </li>
            <li className="mb-3">
              🗓️ udział w dwóch{" "}
              <span className="font-bold">
                1,5-godzinnych sesjach konsultacji grupowych{" "}
              </span>
              miesięcznie
            </li>
            <li>
              💡 udział w dwóch{" "}
              <span className="font-bold">
                autorskich warsztatach tematycznych
              </span>{" "}
              w miesiącu
            </li>
            <li>
              👀{" "}
              <span className="font-bold">nielimitowany dostęp do nagrań</span>{" "}
              ze wszystkich spotkań
            </li>
          </ul>
        </div>
      )}
      {part == 7 && (
        <div className="w-full text-black -mb-8">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            Wybierz swój model subskrypcji{" "}
            <span className="text-ada-pink7">MAGIC:</span>
          </Typography>
        </div>
      )}
      {part == 8 && (
        <div className="w-full text-black -mb-8">
          <Typography variant="h1" className="mb-8 text-center animate-bounce">
            Zapisuję się na listę zainteresowanych!
          </Typography>
        </div>
      )}
      {part == 9 && (
        <div>
          <div className="w-full text-black mb-20">
            <Typography variant="h1" className="mb-8 text-center uppercase">
              JEŚLI PROWADZISZ MARKETING DLA..
            </Typography>
          </div>
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-8"
            onMouseOver={handleMouseEnter}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div
                className={`flex flex-col gap-2 items-center ${hasAnimated ? "lg:animate-slideInFromLeft" : ""}`}
              >
                <div className="max-w-md bg-ada-white3 py-8 border-[3px] border-ada-magicPurple4 ">
                  <Typography
                    variant="h2"
                    className="mb-8 text-center uppercase  border-b-[3px]  border-ada-magicGrey2 pb-4"
                  >
                    🧑‍🎓 KOGOŚ
                  </Typography>
                  <ul className="px-8">
                    <li className="mb-3">
                      ✅ dla osób, które
                      <span className="font-bold">
                        {" "}
                        jeszcze nie prowadziły reklam
                      </span>{" "}
                      i potrzebują pewnego startu w świecie płatnej promocji
                    </li>
                    <li className="mb-3">
                      ✅ dla tych, którzy{" "}
                      <span className="font-bold">
                        boją się, że źle klikną i stracą budżet reklamowy
                      </span>{" "}
                      na nieefektywnych kampaniach
                    </li>
                    <li className="mb-3">
                      ✅ które mają{" "}
                      <span className="font-bold">
                        pierwsze reklamy za sobą (lub klikały w &quot;promuj
                        post&quot;)
                      </span>{" "}
                      ale nie są zadowolone z wyników
                    </li>
                    <li className="mb-3">
                      ✅ które do tej pory
                      <span className="font-bold">
                        {" "}
                        polegały głównie na działaniach organicznych
                      </span>{" "}
                      i chcą bezpiecznie wejść w reklamy
                    </li>
                    <li>
                      ✅{" "}
                      <span className="font-bold">
                        {" "}
                        dla osób, które zlecały reklamy na zewnątrz,
                      </span>{" "}
                      ale chcą przejąć kontrolę nad swoim budżetem reklamowym
                    </li>
                  </ul>
                </div>
                <Button
                  type="button"
                  text={
                    <span className=" !font-extrabold"> WCHODZĘ W TO!</span>
                  }
                  sectionId="magic-package"
                  textSize="text-xs md:text-adaSubtitleSecondary uppercase text-black"
                  btnStyle="bg-ada-magicPurple4
                                      tracking-wide
                                      p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl"
                />
              </div>
              <div
                className={`flex flex-col gap-2 items-center ${hasAnimated ? "lg:animate-slideInFromRight" : ""}`}
              >
                <div className="max-w-md bg-ada-white3 pt-8 py-12 border-[3px] border-ada-magicPink4">
                  <Typography
                    variant="h2"
                    className="mb-8 text-center animate-bounce uppercase  border-b-[3px]  border-ada-magicGrey2 pb-4"
                  >
                    🧑‍🎓 SIEBIE
                  </Typography>
                  <ul className="px-8">
                    <li className="mb-3">
                      ✅ które chcą
                      <span className="font-bold">
                        {" "}
                        poznać najnowsze trendy i narzędzia reklamowe,
                        wyprzedzając konkurencję{" "}
                      </span>
                    </li>
                    <li className="mb-3">
                      ✅{" "}
                      <span className="font-bold">
                        dla social media managerek, wirtualnych asystentek,
                      </span>{" "}
                      które otrzymują zapytania o reklamy i{" "}
                      <span className="font-bold">
                        chcą zarabiać na prowadzeniu kampanii{" "}
                      </span>
                    </li>
                    <li className="mb-3">
                      ✅ dla tych, którzy
                      <span className="font-bold">
                        {" "}
                        chcą nauczyć się lepiej gospodarować budżetem
                      </span>{" "}
                      i optymalizować koszty pozyskania klienta
                    </li>
                    <li className="mb-3">
                      ✅ które chcą{" "}
                      <span className="font-bold">
                        {" "}
                        skonsultować swoje wyniki
                      </span>{" "}
                      i dowiedzieć się, jak je poprawić
                    </li>
                    <li className="mb-3">
                      ✅ dla tych, którzy
                      <span className="font-bold">
                        {" "}
                        już prowadzą reklamy i chcą robić to lepiej,
                      </span>{" "}
                      osiągając wyższe ROAS
                    </li>
                  </ul>
                </div>
                <Button
                  type="button"
                  text={
                    <span className=" !font-extrabold"> Tak, Dołączam!</span>
                  }
                  sectionId="magic-package"
                  textSize="text-xs md:text-adaSubtitleSecondary uppercase text-black"
                  btnStyle="bg-ada-magicPink4
                                      tracking-wide
                                      p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {part == 10 && (
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-ada-black -mb-8">
            <Typography
              variant="h1"
              className="mb-8 text-center animate-bounce"
            >
              Jak wygląda przykładowy miesiąc w
              <span className="text-ada-pink7"> MAGIC </span>?
            </Typography>
          </div>
          <StaticImage
            loading="eager"
            src="../../images/calendar.webp"
            alt=""
            placeholder="blurred"
            width={1363}
            height={795}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        </div>
      )}
      {part == 11 && (
        <div className="flex flex-col items-center gap-8 text-ada-black">
          <Typography variant="h1" className="mb-8 text-center animate-bounce ">
            Zobacz przykładowe pytania i odpowiedzi!
          </Typography>
          <StaticImage
            loading="eager"
            src="../../images/pyt-odp.webp"
            alt=""
            placeholder="blurred"
            width={500}
            formats={["auto", "webp", "avif"]}
            quality={75}
            className="max-w-4xl"
          />
        </div>
      )}
      {part == 12 && (
        <div className="flex flex-col items-center gap-8 -px-8">
          <div className="w-full text-ada-black -mb-8">
            <Typography
              variant="h1"
              className="mb-8 text-center animate-bounce"
            >
              Jak wygląda przykładowy miesiąc w
              <span className="text-ada-pink7"> MAGIC </span>?
            </Typography>
          </div>
          <StaticImage
            loading="eager"
            src="../../images/magic_kalendarz.webp"
            alt=""
            placeholder="blurred"
            width={1000}
            formats={["auto", "webp", "avif"]}
            quality={75}
          />
        </div>
      )}
      {part == 13 && (
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full text-black mb-20">
            <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pt-10 text-center font-anton text-ada-magicOrange">
              Co zmieni się, jeśli zainwestujesz w{" "}
              <span className="text-ada-magicPink4">Adsy&Chill</span>?
            </h2>
          </div>
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6"
            onMouseOver={handleMouseEnter}
          >
            <div className="flex flex-col md:flex-row gap-8 text-black">
              <div
                className={`flex flex-col gap-2 items-center ${hasAnimated ? "lg:animate-slideInFromLeft" : ""}`}
              >
                <div className="max-w-md bg-ada-white3 py-2 border-[3px] border-ada-magicPurple4 ">
                  <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pb-2 text-center font-anton text-ada-magicOrange">
                    Przed
                  </h2>
                  <ul className="px-8">
                    <li className="mb-3">
                      ❌ Korzystasz z <b>“promuj post”</b> na Instagramie
                    </li>
                    <li className="mb-3">
                      ❌ Być może <b>ustawiasz już reklamy w menedżerze,</b> ale
                      nie jesteś zadowolona z wyników
                    </li>
                    <li className="mb-3">
                      ❌ Nie wiesz, <b>jak działać skutecznie z reklamami,</b> i
                      jak je ustawić
                    </li>
                    <li className="mb-3">
                      ❌{" "}
                      <b>
                        Twoje działania organiczne już nie przynoszą
                        efektu,{" "}
                      </b>
                      lub działają jedynie wtedy, gdy bez przerwy publikujesz i
                      działasz na Instagramie
                    </li>
                    <li className="mb-3">
                      ❌ Nie wiesz,
                      <b> jak ustawić kampanię sprzedażową, </b>
                      która przynosi efekty
                    </li>
                    <li className="mb-3">
                      ❌ Obawiasz się
                      <b> przepalenia budżetu reklamowego</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 items-center ${hasAnimated ? "lg:animate-slideInFromRight" : ""}`}
              >
                <div className="max-w-md bg-ada-white3 py-2 border-[3px] border-ada-magicPink4 ">
                  <h2 className="text-adaSubtitle lg:text-adaSubtitleSecondary pb-2 text-center font-anton text-ada-magicOrange">
                    Po
                  </h2>
                  <ul className="px-8">
                    <li className="mb-3">
                      ✅ <b>Korzystasz z gotowych nagrań i instrukcji,</b> które
                      w ekspresowy i skuteczny sposób przeprowadzą Cię przez
                      ustawienie reklam
                    </li>
                    <li className="mb-3">
                      ✅{" "}
                      <b>
                        Masz dostęp do pełnego, eksperckiego pakietu nagrań i
                        wytycznych do kampanii
                      </b>{" "}
                      na pozyskanie obserwujących, budowanie listy mailowej i
                      sprzedaży remarketingowej
                    </li>
                    <li className="mb-3">
                      ✅ Otrzymujeszb <b>sprawdzony i gotowy</b> proces od
                      ekspertek
                    </li>
                    <li className="mb-3">
                      ✅{" "}
                      <b>
                        Potrafisz analizować wyniki swoich reklam i wdrażać
                        poprawki,
                      </b>
                      aby działały lepiej
                    </li>
                    <li className="mb-3">
                      ✅ <b> Twoje kampanie reklamowe pracują:</b>
                      na urlopie, w weekend, w święta, po południu…
                    </li>
                    <li className="mb-3">
                      ✅<b> Uśmiechasz się na widok nowych obserwacji,</b>{" "}
                      zamówień, zapytań i rosnącej liczby mailowej!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Button
              type="button"
              text={
                <span className="!font-extrabold">Wybieram ADSY&CHILL!</span>
              }
              sectionId="pakiety"
              textSize="text-adaMin md:text-adaSubtitle text-black"
              btnStyle="uppercase w-[187px] md:w-[480px] bg-ada-magicPink2 md:tracking-[2.90px] md:h-[70px] rounded-[50px] border border-black hover:bg-ada-magicPink2"
            />
          </div>
          <div className="flex justify-center items-center absolute bottom-[-120px] left-1/2 -translate-x-1/2 translate-y-[-54px] lg:-translate-y-6 w-[60px] lg:w-[80px]">
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
        </div>
      )}
    </Section>
  )
}

export default MagicWhy
