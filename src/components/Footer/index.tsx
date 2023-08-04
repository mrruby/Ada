import React from "react"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer";
import Logo from "./Logo";
import { Link } from "gatsby"
import FooterMenu from "./FooterMenu";

const Footer = (): JSX.Element => {

  return (
    <MaxWithBgColorContainer bgColor="bg-ada-light-pink" extraStyle=" relative z-20">
    <footer className="flex items-center justify-between flex-col lg:flex-row px-4 lg:pl-[70px] py-6">
        <Link to="/">
          <Logo/>
        </Link>
        <FooterMenu />
    </footer>
    </MaxWithBgColorContainer>
  )
}

export default Footer
