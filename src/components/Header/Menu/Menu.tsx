import React from "react"
import { Link } from "gatsby"
import { StyledMenu } from "./Menu.styled"

type Props = {
  open: boolean
}

const Menu = ({ open }: Props) => {
  return (
    <StyledMenu open={open} aria-hidden={!open}>
      <Link to="/">About</Link>
      <Link to="/">Products</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Form Examples</Link>
    </StyledMenu>
  )
}

export default Menu
