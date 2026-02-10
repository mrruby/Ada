import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import React from "react"

const PowtorkaMasterclass = () => {
  return (
    <Layout flowerWhite2={true} flowerWhite3={true}>
      <MaxWithBgColorContainer bgColor="bg-linear2">
        <div className="flex flex-col items-center py-12 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            MASTERCLASS: Rozpisz plan kampanii reklamowej na Facebooku &
            Instagramie
          </h1>
          <div className="w-full max-w-3xl mb-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HGrExNf1Jdk"
              title="Masterclass: Jak promować produkty cyfrowe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="/ogarnij-swoje-adsy"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            CHCĘ ZARABIAĆ Z REKLAMAMI
          </a>
        </div>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Ogarnij swoje Adsy" />

export default PowtorkaMasterclass
