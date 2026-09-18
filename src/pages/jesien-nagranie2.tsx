import React from "react"
import MagicJesienNagranie2 from "components/MagicJesienNagranie2"
import SEO from "components/seo"

const JesienNagranie2Page = () => <MagicJesienNagranie2 />

export const Head = () => (
  <>
    <html lang="pl" />
    <SEO
      title="MAGIC. Subskrypcja dla przedsiębiorczyń"
      description="Skaluj swój biznes dzięki reklamom, AI i automatyzacjom. Dołącz do MAGIC: konsultuj reklamy, teksty i grafiki z całym zespołem. Wybierz 1, 3 lub 6 miesięcy."
      image="https://adrianna.com.pl/img/ada_purple.webp"
    />
    <link rel="canonical" href="https://adrianna.com.pl/jesien-nagranie2/" />
    {/* Strona dostępna tylko z linku — nie indeksujemy. */}
    <meta name="robots" content="noindex, nofollow" />
  </>
)

export default JesienNagranie2Page
