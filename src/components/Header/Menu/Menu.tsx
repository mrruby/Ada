import React from "react"
import { Link } from "gatsby"
import { StyledMenu } from "./Menu.styled"

type Props = {
  open: boolean
}

const Menu = ({ open }: Props) => {
  return (
    <StyledMenu open={open} aria-hidden={!open}>
      <Link to="/">O mnie</Link>
      <Link to="/">Podcast</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Kontakt</Link>
    </StyledMenu>
  )
}

export default Menu
