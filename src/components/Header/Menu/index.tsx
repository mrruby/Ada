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

  const submenuLinkClass =
    "text-ada-blue text-adaBase md:text-adaNav font-bold uppercase transition-colors duration-300 hover:text-ada-white pt-4 pb-4 bg-ada-light-pink text-center"

  const links = [
    { to: "https://sklep.adrianna.com.pl/", text: "sklep" },
    {
      to: "",
      text: "mentoring",
      subMenu: [
        {
          to: "/meta-ads-mentoring",
          text: "dla specjalistek",
        },
        {
          to: "/ogarnij-swoje-adsy/",
          text: "dla biznesu",
        },
      ],
    },
    { to: "/about", text: "o mnie" },
    { to: "/materials", text: "materiały" },
    { to: "/blog", text: "blog" },
    { to: "/contact", text: "kontakt" },
  ]

  const [isOpen, setIsOpen] = React.useState(false)
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`md:hidden flex flex-col items-center justify-center ${
          open ? "translate-x-0 h-screen" : "-translate-x-full h-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <div aria-hidden={!open} className="flex flex-col">
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
          {links.map((link, index) => {
            return link.subMenu ? (
              <div key={index} className="flex flex-col mx-auto">
                <button
                  className={mentoringLinkClass}
                  onClick={handleMenuToggle}
                >
                  {link.text}
                </button>
                <div className="flex flex-col bg-ada-light-pink px-6">
                  {isOpen &&
                    link.subMenu.map((subLink) => (
                      <NavLink
                        key={subLink.text}
                        to={subLink.to}
                        text={subLink.text}
                        className={submenuLinkClass}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={link.to}
                text={link.text}
                className={
                  link.text === "mentoring" ? mentoringLinkClass : linkClass
                }
              />
            )
          })}
        </div>
      </nav>
      <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
