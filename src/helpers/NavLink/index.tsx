import React from "react"
import { Link } from "gatsby"

type NavLinkProps = {
  to: string
  text: string
  className: string
}

const NavLink: React.FC<NavLinkProps> = ({ to, text, className }) => {
  return to.startsWith("http") ? (
    <a href={to} className={className}>
      {text}
    </a>
  ) : (
    <Link to={to} className={className}>
      {text}
    </Link>
  )
}

export default NavLink
