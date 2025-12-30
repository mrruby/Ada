import Layout from "components/Layout"
import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import SEO from "components/seo"
import React from "react"

const SowaPage = () => {
  return (
    <Layout showHeaderAndFooter={false}>
      {/* Section 1 - Hero (Burgundy) */}
      <MaxWithBgColorContainer bgColor="bg-ada-sowaBurgundy">
        <div className="py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between px-4">
          <div className="w-full lg:w-1/2">
            <p className="text-[20px] lg:text-[24px] font-bold text-white mb-4">
              Mini-kurs za 0zł:
            </p>
            <h1 className="text-[32px] lg:text-[48px] font-anton font-normal leading-[125%] text-white">
              Tutaj wpisz{" "}
              <span className="text-ada-magicYellow">główny tytuł strony</span>{" "}
              i opis co użytkownik otrzyma.
            </h1>
          </div>
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-center text-black font-bold">
                Formularz tutaj
              </p>
            </div>
          </div>
        </div>
      </MaxWithBgColorContainer>

      {/* Section 2 - Description (Light Gray) */}
      <MaxWithBgColorContainer bgColor="bg-ada-magicGrey">
        <div className="py-16 flex flex-col lg:flex-row justify-between items-start gap-8 px-4">
          <div className="w-full lg:w-1/2">
            <h2 className="inline-block text-[48px] font-anton font-normal text-black bg-ada-magicOrange2 uppercase leading-none mb-8">
              OPIS szkolenia
            </h2>
            <div className="mt-6">
              <h3 className="text-[16px] font-bold text-black mb-4 leading-none">
                Co zyskasz
              </h3>
              <ul className="space-y-3 text-[16px] font-normal text-black leading-none">
                <li>Punkt pierwszy opisu</li>
                <li>Punkt drugi opisu</li>
                <li>Punkt trzeci opisu</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-black">Obrazek tutaj</p>
            </div>
          </div>
        </div>
      </MaxWithBgColorContainer>

      {/* Section 3 - Benefits (Burgundy) */}
      <MaxWithBgColorContainer bgColor="bg-ada-sowaBurgundy">
        <div className="py-16 px-4">
          <h2 className="text-[48px] font-anton font-normal uppercase leading-none text-center mb-12 text-white">
            co zyskasz podczas{" "}
            <span className="text-ada-magicYellow">szkolenia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-ada-magicPink3 rounded-lg p-6 border border-black text-center">
              <h3 className="text-[16px] font-bold text-black mb-2 uppercase">
                Korzyść 1
              </h3>
              <p className="text-[16px] font-normal text-black">
                Opis korzyści pierwszej
              </p>
            </div>
            <div className="bg-ada-magicYellow rounded-lg p-6 border border-black text-center">
              <h3 className="text-[16px] font-bold text-black mb-2 uppercase">
                Korzyść 2
              </h3>
              <p className="text-[16px] font-normal text-black">
                Opis korzyści drugiej
              </p>
            </div>
            <div className="bg-ada-magicPurple4 rounded-lg p-6 border border-black text-center">
              <h3 className="text-[16px] font-bold text-black mb-2 uppercase">
                Korzyść 3
              </h3>
              <p className="text-[16px] font-normal text-black">
                Opis korzyści trzeciej
              </p>
            </div>
          </div>
        </div>
      </MaxWithBgColorContainer>

      {/* Section 4 - Placeholder (Light Gray) */}
      <MaxWithBgColorContainer bgColor="bg-ada-magicGrey">
        <div className="py-16 px-4 text-center">
          <h2 className="text-[48px] font-anton font-normal uppercase leading-none mb-8 text-black">
            Sekcja 4
          </h2>
          <p className="text-[18px] text-black max-w-2xl mx-auto">
            Placeholder dla czwartej sekcji. Tutaj możesz dodać dodatkowe
            informacje.
          </p>
        </div>
      </MaxWithBgColorContainer>

      {/* Section 5 - Placeholder (Burgundy) */}
      <MaxWithBgColorContainer bgColor="bg-ada-sowaBurgundy">
        <div className="py-16 px-4 text-center">
          <h2 className="text-[48px] font-anton font-normal uppercase leading-none mb-8 text-white">
            Sekcja 5
          </h2>
          <p className="text-[18px] text-white max-w-2xl mx-auto">
            Placeholder dla piątej sekcji. Tutaj możesz dodać dodatkowe
            informacje.
          </p>
        </div>
      </MaxWithBgColorContainer>

      {/* Section 6 - Placeholder (Light Gray) */}
      <MaxWithBgColorContainer bgColor="bg-ada-magicGrey">
        <div className="py-16 px-4 text-center">
          <h2 className="text-[48px] font-anton font-normal uppercase leading-none mb-8 text-black">
            Sekcja 6
          </h2>
          <p className="text-[18px] text-black max-w-2xl mx-auto">
            Placeholder dla szóstej sekcji. Tutaj możesz dodać dodatkowe
            informacje.
          </p>
        </div>
      </MaxWithBgColorContainer>

      {/* Section 7 - CTA (Burgundy) */}
      <MaxWithBgColorContainer bgColor="bg-ada-sowaBurgundy">
        <div className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[48px] lg:text-[72px] font-anton font-normal uppercase leading-none text-white text-center">
              WYPEŁNIJ
              <br />
              FORMULARZ!
            </h2>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg">
              <p className="text-center text-black font-bold">
                Formularz tutaj
              </p>
            </div>
          </div>
        </div>
      </MaxWithBgColorContainer>
    </Layout>
  )
}

export const Head = () => <SEO title="Sowa" />

export default SowaPage
