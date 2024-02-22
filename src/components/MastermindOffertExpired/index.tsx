import React from "react"
import { Link } from "gatsby"

const MastermindOffertExpired = (): JSX.Element => {
  return (
    <section className="h-[86vh] py-16">
      <div className="h-full px-4 flex items-center">
        <h2 className="text-[20px] lg:text-adaTitle font-bold">
          Ta oferta już wygasła!
          <br />
          Jeśli chcesz zapisać się na listę zainteresowanych programem, kliknij{" "}
          <Link to="https://subscribepage.io/uleZQU" className="underline">
            tutaj
          </Link>
          , a dowiesz się o starcie, gdy tylko otworzę drzwi do programu!{" "}
        </h2>
      </div>
    </section>
  )
}

export default MastermindOffertExpired
