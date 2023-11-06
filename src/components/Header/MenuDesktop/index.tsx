import React from "react"
import NavLink from "../../../../src/helpers/NavLink"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const MenuDesktop = (): JSX.Element => {
  const linkClass =
    "text-ada-blue text-adaBase md:text-adaNav font-bold  uppercase transition-colors duration-300 hover:text-ada-white hover:border-b-4 hover:border-ada-blue"

  const links = [
    { to: "https://sklep.adrianna.com.pl/", text: "sklep" },
    { to: "/about", text: "o mnie" },
    { to: "/materials", text: "materiały" },
    { to: "/blog", text: "blog" },
    { to: "/contact", text: "kontakt" },
  ]

  return (
    <>
      <nav
        className={`h-[50px] py-[11px] hidden md:flex justify-center gap-[20px] lg:gap-[60px]`}
      >
        <Link to={"/"}>
          <StaticImage
            src={"../../../images/logo.webp"}
            alt="Ada Promis"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            width={25}
            height={25}
            quality={95}
          />
        </Link>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            text={link.text}
            className={linkClass}
          />
        ))}
      </nav>
    </>
  )
}

export default MenuDesktop
