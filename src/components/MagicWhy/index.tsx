import { StaticImage } from "gatsby-plugin-image"
import { Button } from "helpers/Button"
import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

const MagicWhy = ({ part }: { part: number }) => {
  return (
    <Section bgColor="bg-transparent">
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
              <ul className="max-w-md">
                <Typography
                  variant="h2"
                  className="mb-8 text-center animate-bounce"
                >
                  🧑‍🎓 Przedsiębiorczyń:
                </Typography>
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
              <ul className="max-w-md">
                <Typography
                  variant="h2"
                  className="mb-8 text-center animate-bounce"
                >
                  🧑‍🎓 Marketerek:
                </Typography>
                <li className="mb-3">
                  ✅ które chcą
                  <span className="font-bold">
                    {" "}
                    poznać najnowsze trendy i narzędzia reklamowe, wyprzedzając
                    konkurencję{" "}
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
                  <span className="font-bold"> skonsultować swoje wyniki</span>{" "}
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
        <div className="flex flex-col items-center gap-8 text-ada-black">
          <Typography variant="h1" className="mb-8 text-center animate-bounce ">
            Zobacz przykładowe pytania i odpowiedzi!
          </Typography>
          <div className="flex flex-col items-center">
            <div className="lg:-ml-80">
              <StaticImage
                loading="eager"
                src="../../images/AgnieszkaPyt.webp"
                alt=""
                placeholder="blurred"
                width={568}
                height={252}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="lg:-mt-2 lg:ml-[480px]">
              <StaticImage
                loading="eager"
                src="../../images/AgnieszkaOdp.webp"
                alt=""
                placeholder="blurred"
                width={582}
                height={187}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="lg:-ml-80">
              <StaticImage
                loading="eager"
                src="../../images/MagPyt.webp"
                alt=""
                placeholder="blurred"
                width={700}
                height={200}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="lg:-ml-[500px] -mt-10">
              <StaticImage
                loading="eager"
                src="../../images/MagOdp.webp"
                alt=""
                placeholder="blurred"
                width={600}
                height={120}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="lg:ml-[500px]">
              <StaticImage
                loading="eager"
                src="../../images/MonPyt.webp"
                alt=""
                placeholder="blurred"
                width={1200}
                height={300}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="-mt-12 lg:ml-[480px]">
              <StaticImage
                loading="eager"
                src="../../images/MonOdp.webp"
                alt=""
                placeholder="blurred"
                width={1000}
                height={274}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
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
            <Typography
              variant="h1"
              className="mb-8 text-center animate-bounce uppercase"
            >
              <span className="text-white">MAGIC </span>
              jest dla...
            </Typography>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-8">
            <div className="w-full text-black">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-2 items-center">
                  <ul className="max-w-md bg-ada-white3 py-8 border-[3px] rounded-3xl border-ada-magicPurple4">
                    <Typography
                      variant="h2"
                      className="mb-8 text-center animate-bounce uppercase  border-b-[3px]  border-ada-magicGrey2 pb-4"
                    >
                      🧑‍🎓 Przedsiębiorczyń:
                    </Typography>
                    <div className="px-8">
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
                    </div>
                  </ul>
                  <Button
                    type="button"
                    text={<span className=" font-bold"> WCHODZĘ W TO!</span>}
                    url="signup"
                    textSize="text-xs md:text-adaSubtitleSecondary uppercase text-black"
                    btnStyle="bg-ada-magicPurple4
                                      tracking-wide 
                                      p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <ul className="max-w-md bg-ada-white3 pt-8 py-12 border-[3px] rounded-3xl border-ada-magicPink4">
                    <Typography
                      variant="h2"
                      className="mb-8 text-center animate-bounce uppercase  border-b-[3px]  border-ada-magicGrey2 pb-4"
                    >
                      🧑‍🎓 Marketerek:
                    </Typography>
                    <div className="px-8">
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
                    </div>
                  </ul>
                  <Button
                    type="button"
                    text={<span className=" font-bold"> Tak, Dołączam!</span>}
                    url="signup"
                    textSize="text-xs md:text-adaSubtitleSecondary uppercase text-black"
                    btnStyle="bg-ada-magicPink4
                                      tracking-wide 
                                      p-3 hover:opacity-90 rounded-full min-w-[130px] h-[58px] shadow-xl"
                  />
                </div>
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
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:-space-x-8">
            <div>
              <StaticImage
                loading="eager"
                src="../../images/pyt1.webp"
                alt=""
                placeholder="blurred"
                width={464}
                height={260}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div>
              <StaticImage
                loading="eager"
                src="../../images/pyt2.webp"
                alt=""
                placeholder="blurred"
                width={531}
                height={312}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="lg:-ml-80">
              <StaticImage
                loading="eager"
                src="../../images/pyt3.webp"
                alt=""
                placeholder="blurred"
                width={544}
                height={128}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="lg:-ml-[500px] -mt-10">
              <StaticImage
                loading="eager"
                src="../../images/pyt4.webp"
                alt=""
                placeholder="blurred"
                width={420}
                height={166}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="lg:ml-[500px]">
              <StaticImage
                loading="eager"
                src="../../images/pyt5.webp"
                alt=""
                placeholder="blurred"
                width={510}
                height={170}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
            <div className="-mt-12 lg:ml-[480px]">
              <StaticImage
                loading="eager"
                src="../../images/pyt6.webp"
                alt=""
                placeholder="blurred"
                width={444}
                height={210}
                formats={["auto", "webp", "avif"]}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

export default MagicWhy
