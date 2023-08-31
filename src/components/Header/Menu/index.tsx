import React from "react"
import Burger from "./Burger"
import NavLink from '../../../../src/helpers/NavLink'

type Props = {
  open: boolean
  setOpen: (_: boolean) => void
}

const Menu = ({ open, setOpen }: Props): JSX.Element => {
  const linkClass = "text-ada-blue text-adaSubtitle md:text-adaNav font-bold uppercase py-3 transition-colors duration-300 hover:text-ada-white hover:border-b-4 hover:border-ada-blue";

  const links = [
    { to: "https://ebook.adrianna.com.pl/", text: "ebook" },
    { to: "https://checklistafb.adrianna.com.pl", text: "checklista" },
    { to: "https://metanewsletter.adrianna.com.pl", text: "newsletter" },
    { to: "/about", text: "O mnie" },
    { to: "/blog", text: "Blog" },
    // { to: "/quiz", text: "Quiz" },
    { to: "/contact", text: "Kontakt" },
    { to: "/podcast", text: "Podcast" },
  ];

  
  return (
    <>
    <nav
        aria-hidden={!open}
        className=  {`md:hidden flex flex-col items-center justify-center ${open ? " translate-x-0 h-screen" : "-translate-x-full h-0"
        } transition-transform duration-300 ease-in-out`}
      >
       {links.map((link, index) => (
          <NavLink key={index} to={link.to} text={link.text} className={linkClass} />
        ))}
        </nav>
        <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
