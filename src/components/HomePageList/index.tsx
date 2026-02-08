import Typography from "components/shared/Typography"
import { StaticImage } from "gatsby-plugin-image"
import HomePageSection from "helpers/HomePageSection"
import React from "react"

const HomePageList = () => {
  return (
    <div className="py-20 px-2">
      <Typography
        variant="h1"
        className="text-black leading-snug mb-6 text-center pt-10"
      >
        <span className="text-ada-magicOrange"> Sprawdź,</span> jak możemy
        współpracować!
      </Typography>
      <HomePageSection
        text={
          <div>
            <StaticImage
              src={"../../images/magic-kolektyw.png"}
              alt="Ada Promis"
              placeholder="blurred"
              width={250}
              height={128}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
            <p className="mt-4">
              Marketing Ads Girls Inside Collective. Dla przedsiębiorczyń
              prowadzących kursy online, mentoringi, usługi cyfrowe
            </p>
          </div>
        }
        buttonText="WYBIERAM!"
        buttonUrl="/magic-kolektyw"
        image={
          <StaticImage
            src={"../../images/hompage1.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            width={500}
            height={500}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        }
      />
      <HomePageSection
        text={
          <div className="max-w-[400px]">
            <Typography
              variant="h2"
              className="text-ada-magicOrange2 leading-snug mb-6 lg:text-adaSubtitleThird"
            >
              Marketing Ads Girls Inside Club
            </Typography>
            <p>
              Społeczność kobiet, które skalują swoje biznesy z pomocą reklam
              pod czujnym okiem profesjonalistek
            </p>
          </div>
        }
        buttonText="Dołączam!"
        buttonUrl="/adsy-chill-2025"
        image={
          <div className="lg:absolute bottom-0 right-[-40px]">
            <StaticImage
              src={"../../images/hompage2.webp"}
              alt="Ada Promis"
              placeholder="blurred"
              width={472}
              height={490}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        }
      />
      <HomePageSection
        text={
          <div className="max-w-[400px]">
            <Typography
              variant="h2"
              className="text-ada-magicOrange mb-6 font-anton font-normal lg:text-adaTitle"
            >
              Adsy&Chill
            </Typography>
            <p>
              Ustaw reklamy samodzielnie, skorzystaj z gotowych, sprawdzonych
              instrukcji i skaluj swój biznes bez dodatkowej pracy!
            </p>
          </div>
        }
        buttonText="WYBIERAM!"
        buttonUrl="/adsy-chill-2025"
        image={
          <div className="lg:absolute bottom-[60px] right-[-40px]">
            <StaticImage
              src={"../../images/hompage3.webp"}
              alt="Ada Promis"
              placeholder="blurred"
              width={488}
              height={310}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        }
      />
      <HomePageSection
        text={
          <div>
            <Typography
              variant="h2"
              className="leading-snug mb-6 font-anton font-normal lg:text-adaTitle"
            >
              QUIZ
            </Typography>
            <p>Jaka jest Twoja adsowa osobowość?</p>
          </div>
        }
        buttonText="SPRAWDZAM!"
        buttonUrl="/quiz"
        image={
          <div className="lg:ml-[30px]">
            <StaticImage
              src={"../../images/hompage4.webp"}
              alt="Ada Promis"
              placeholder="blurred"
              width={400}
              height={400}
              formats={["auto", "webp", "avif"]}
              quality={100}
            />
          </div>
        }
      />
      <HomePageSection
        text={
          <div>
            <Typography
              variant="h2"
              className="leading-snug mb-6 font-anton font-normal lg:text-adaTitle"
            >
              SKLEP
            </Typography>
            <p>Sprawdź moje produkty cyfrowe!</p>
          </div>
        }
        buttonText="SPRAWDZAM!"
        buttonUrl="https://sklep.adrianna.com.pl/"
        image={
          <StaticImage
            src={"../../images/hompage5.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            width={738}
            height={513}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
        }
      />
      <HomePageSection
        text={
          <div className="text-center">
            <Typography
              variant="h2"
              className="leading-snug mb-6 font-anton font-normal lg:text-adaTitle"
            >
              KONTAKT
            </Typography>
            <p>Napisz, jeśli chcesz skontaktować się w innej sprawie!</p>
          </div>
        }
        buttonText="WYŚLIJ WIADOMOŚĆ!"
        buttonUrl="/contact"
      />
    </div>
  )
}

export default HomePageList
