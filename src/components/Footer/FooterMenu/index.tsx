import React from "react"
import NavLink from '../../../../src/helpers/NavLink'

const FooterMenu = (): JSX.Element => {
  const linkClass = "text-ada-blue text-adaNav font-bold uppercase hover:text-ada-white";

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
        <nav className="px-[11px] py-[36px] flex justify-center lg:justify-end gap-[18px] flex-wrap">
        {links.map((link, index) => (
          <NavLink key={index} to={link.to} text={link.text} className={linkClass} />
        ))}
        </nav>
    </>
  )
}

export default FooterMenu

