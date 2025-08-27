import { Link } from "gatsby"
import React from "react"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer"
import FooterMenu from "./FooterMenu"
import Logo from "./Logo"

const Footer = () => {
  return (
    <MaxWithBgColorContainer
      bgColor="bg-ada-light-pink"
      extraStyle=" relative z-30"
    >
      <footer className="flex items-center flex-col lg:flex-row px-4 lg:pl-[70px] py-6 max-w-7xl mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        <FooterMenu />
      </footer>
    </MaxWithBgColorContainer>
  )
}

export default Footer
