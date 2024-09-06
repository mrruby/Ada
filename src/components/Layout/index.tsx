import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { LayoutElements } from "../Layout/elements"
import "animate.css/animate.compat.css"

type LayoutElements = {
  flowerBlue?: boolean
  starPink?: boolean
  flowerWhite?: boolean
  twoBlueFlowers?: boolean
  twoBlueFlowers2?: boolean
  flowerBlue2?: boolean
  flowerBlue3?: boolean
  flowerBlue4?: boolean
  flowerBlue5?: boolean
  flowerBlue6?: boolean
  flowerBlue7?: boolean
  flowerBlue8?: boolean
  flowerBlue9?: boolean
  flowerBlue10?: boolean
  flowerBlue11?: boolean
  flowerWhite2?: boolean
  flowerWhite3?: boolean
  waves1?: boolean
  waves2?: boolean
  waves3?: boolean
  waves4?: boolean
  waves5?: boolean
  showHeaderAndFooter?: boolean
  sun1?: boolean
  sun2?: boolean
  sun3?: boolean
  sun4?: boolean
  sun5?: boolean
  sun6?: boolean
  sun7?: boolean
  flaming?: boolean
  flaps?: boolean
  flaps2?: boolean
  sunglasses?: boolean
  sunglasses2?: boolean
  ball1?: boolean
  ball2?: boolean
  ball3?: boolean
  drinks?: boolean
  arrow?: boolean
  arrowMasterclass?: boolean
  leaves1?: boolean
  leaves2?: boolean
  leaves3?: boolean
  leaves4?: boolean
  leaves5?: boolean
  leaves6?: boolean
  leaves7?: boolean
  leaves8?: boolean
  leaves9?: boolean
  leaves10?: boolean
  leaves11?: boolean
  leaves12?: boolean
  leaves13?: boolean
  leaves14?: boolean
  leaves15?: boolean
}

type Props = {
  children: React.ReactNode
} & LayoutElements

const defaultProps: LayoutElements = {
  flowerBlue: false,
  starPink: false,
  flowerWhite: false,
  twoBlueFlowers: false,
  twoBlueFlowers2: false,
  flowerBlue2: false,
  flowerBlue3: false,
  flowerBlue4: false,
  flowerBlue5: false,
  flowerBlue6: false,
  flowerBlue7: false,
  flowerBlue8: false,
  flowerBlue9: false,
  flowerBlue10: false,
  flowerBlue11: false,
  flowerWhite2: false,
  flowerWhite3: false,
  waves1: false,
  waves2: false,
  waves3: false,
  waves4: false,
  waves5: false,
  sun1: false,
  sun2: false,
  sun3: false,
  sun4: false,
  sun5: false,
  sun6: false,
  flaming: false,
  flaps: false,
  flaps2: false,
  sunglasses: false,
  sunglasses2: false,
  ball1: false,
  ball2: false,
  ball3: false,
  drinks: false,
  arrow: false,
  arrowMasterclass: false,
  leaves1: false,
  leaves2: false,
  leaves3: false,
  leaves4: false,
  leaves5: false,
  leaves6: false,
  leaves7: false,
  leaves8: false,
  leaves9: false,
  leaves10: false,
  leaves11: false,
  leaves12: false,
  leaves13: false,
  leaves14: false,
  leaves15: false,
}

const Layout: React.FC<Props> = ({
  children,
  showHeaderAndFooter = true,
  ...layoutElements
}) => {
  return (
    <div className="antialiased min-h-screen max-w-full overflow-hidden flex flex-col scroll-smooth relative text-ada-blue">
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
      <LayoutElements {...defaultProps} {...layoutElements} />
    </div>
  )
}

export default Layout
