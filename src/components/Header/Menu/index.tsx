import React from "react"
import Burger from "./Burger"
import NavLink from "../../../../src/helpers/NavLink"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

type Props = {
  open: boolean
  setOpen: (_: boolean) => void
}

const Menu = ({ open, setOpen }: Props): JSX.Element => {
  const linkClass =
    "text-ada-blue text-adaSubtitle md:text-adaNav font-bold uppercase py-3 transition-colors duration-300 hover:text-ada-white hover:border-b-4 hover:border-ada-blue"

  const mentoringLinkClass =
    "text-white-pink text-adaSubtitle md:text-adaNav font-extrabold uppercase transition-colors duration-300 hover:text-ada-white border-b-4 border-ada-pink hover:border-ada-blue"

  const links = [
    { to: "https://sklep.adrianna.com.pl/", text: "sklep" },
    { to: "/meta-ads-mentoring", text: "mentoring" },
    { to: "/about", text: "o mnie" },
    { to: "/materials", text: "materiały" },
    { to: "/blog", text: "blog" },
    { to: "/contact", text: "kontakt" },
  ]

  return (
    <>
      <nav
        aria-hidden={!open}
        className={`md:hidden flex flex-col items-center justify-center ${
          open ? " translate-x-0 h-screen" : "-translate-x-full h-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <Link to={"/"}>
          <StaticImage
            src={"../../../images/logo.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            width={35}
            height={35}
            quality={95}
          />
        </Link>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            text={link.text}
            className={
              link.text === "mentoring" ? mentoringLinkClass : linkClass
            }
          />
        ))}
      </nav>
      <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
