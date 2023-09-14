import React from "react"
import NavLink from '../../../../src/helpers/NavLink'

const FooterMenu = (): JSX.Element => {
  const linkClass = "text-ada-blue text-adaNav font-bold uppercase hover:text-ada-white";

  const links = [
    { to: "https://sklep.adrianna.com.pl/", text: "sklep" },
    { to: "/about", text: "o mnie" },
    { to: "/materials", text: "materiały" },
    { to: "/blog", text: "blog" },
    { to: "/contact", text: "kontakt" },
  ];
  
  return (
    <>
        <nav className="px-[45px] py-[36px] flex justify-center lg:justify-between gap-[20px] lg:gap-[50px] flex-wrap">
        {links.map((link, index) => (
          <NavLink key={index} to={link.to} text={link.text} className={linkClass} />
        ))}
        </nav>
    </>
  )
}

export default FooterMenu

