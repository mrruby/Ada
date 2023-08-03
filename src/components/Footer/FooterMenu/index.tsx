import React from "react"
import { Link } from "gatsby"

const FooterMenu = (): JSX.Element => {
  const linkClass = "text-ada-blue text-adaNav font-bold uppercase hover:text-ada-white hover:underline";

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

export default FooterMenu

