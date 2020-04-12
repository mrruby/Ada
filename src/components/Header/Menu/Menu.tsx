import React from "react"
import { Link } from "gatsby"
import { StyledMenu } from "./Menu.styled"
import Burger from "./Burger"

type Props = {
  open: boolean
  setOpen: Function
}

const Menu = ({ open, setOpen }: Props) => {
  return (
    <>
      <StyledMenu open={open} aria-hidden={!open}>
        <Link to="/">O mnie</Link>
        <Link to="/">Podcast</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Kontakt</Link>
      </StyledMenu>
      <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
