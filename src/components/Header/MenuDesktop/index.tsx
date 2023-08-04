import React from "react"
import NavLink from '../../../../src/helpers/NavLink'

const MenuDesktop = (): JSX.Element => {
  const linkClass = "text-ada-blue text-adaBsamd:text-adaNav font-bold  uppercase transition-colors duration-300 hover:text-ada-white hover:border-b-4 hover:border-ada-blue";

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
        className={`px-[50px] h-[50px] py-[11px] hidden md:flex justify-end gap-[20px] lg:gap-[30px]`}
      >
       {links.map((link, index) => (
          <NavLink key={index} to={link.to} text={link.text} className={linkClass} />
        ))}
        </nav>
    </>
  )
}

export default MenuDesktop
