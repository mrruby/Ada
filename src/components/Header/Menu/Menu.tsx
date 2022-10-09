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
        <a
          className="highlight"
          href="https://chce-robic-lepsze-kampanie.adrianna.com.pl/"
        >
          ebook
        </a>
        <a href="https://checklistafb.adrianna.com.pl">checklista</a>
        <a href="https://metanewsletter.adrianna.com.pl">newsletter</a>
        <Link to="/about">O mnie</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Kontakt</Link>
      </StyledMenu>
      <Burger open={open} setOpen={setOpen} />
    </>
  )
}

export default Menu
