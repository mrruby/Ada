import React from "react"
import { Link } from "gatsby"

const MenuDesktop = (): JSX.Element => {
  const linkClass = "text-ada-blue text-adaBsamd:text-adaNav font-bold uppercase hover:text-ada-white hover:hover:underline";

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
        className={`px-[50px] py-[11px] hidden md:flex justify-end gap-[20px] lg:gap-[30px]`}
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
    </>
  )
}

export default MenuDesktop
