import React from "react"
import { Link } from "gatsby"
import { StyledMenu } from "./Menu.styled"
import Burger from "./Burger"

type Props = {
  open: boolean
  setOpen: (_: boolean) => void
}

const Menu = ({ open, setOpen }: Props): JSX.Element => {
  return (
    <>
      <StyledMenu open={open} aria-hidden={!open}>
        <Link to="/">O mnie</Link>
        <Link to="/podcasts">Podcast</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Kontakt</Link>
      </StyledMenu>
      <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
