import { Link } from "gatsby"
import React, { useState } from "react"
import Logo from "../Logo"
import Menu from "./Menu"
import { Container, Nav } from "./Header.styled"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo alt={siteTitle} />
        </Link>
        <Menu open={open} setOpen={setOpen} />
      </Nav>
    </Container>
  )
}

export default Header
