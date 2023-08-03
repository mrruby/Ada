import React from "react"
import { Link } from "gatsby"
import Burger from "./Burger"

type Props = {
  open: boolean
  setOpen: (_: boolean) => void
}

const Menu = ({ open, setOpen }: Props): JSX.Element => {

  const linkClass = "text-ada-blue text-adaSubtitle md:text-adaNav font-bold uppercase py-4 hover:text-ada-white hover:underline";

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
        {links.map((link, index) =>
          link.to.startsWith("http") ? (
            <a key={index} href={link.to} className={linkClass}>
              {link.text}
            </a>
          ) : (
            <Link key={index} to={link.to} className={linkClass}>
              {link.text}
            </Link>
          )
        )}
        </nav>
        <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
