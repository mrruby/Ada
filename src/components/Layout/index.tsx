import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { LayoutElements } from "../Layout/elements"

type LayoutElements = {
  flowerBlue?: boolean
  starPink?: boolean
  flowerWhite?: boolean
  twoBlueFlowers?: boolean
  twoBlueFlowers2?: boolean
  flowerBlue2?: boolean
  flowerBlue3?: boolean
  flowerWhite2?: boolean
  flowerWhite3?: boolean
  waves1?: boolean
  waves2?: boolean
  waves3?: boolean
  waves4?: boolean
  waves5?: boolean
  waves6?: boolean
  showHeader?: boolean
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
  flowerWhite2: false,
  flowerWhite3: false,
  waves1: false,
  waves2: false,
  waves3: false,
  waves4: false,
  waves5: false,
  waves6: false,
}

const Layout: React.FC<Props> = ({
  children,
  showHeader = true,
  ...layoutElements
}) => {
  return (
    <div className="antialiased min-h-screen max-w-full overflow-hidden flex flex-col scroll-smooth relative text-ada-blue">
      {showHeader && <Header />}
      {children}
      <Footer />
      <LayoutElements {...defaultProps} {...layoutElements} />
    </div>
  )
}

export default Layout
