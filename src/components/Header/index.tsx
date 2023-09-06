import React, { useState } from "react"
import Menu from "./Menu"
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer";
import MenuDesktop from "./MenuDesktop";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <MaxWithBgColorContainer bgColor="bg-ada-light-pink" extraStyle="fixed z-50">
    <header>
        <Menu open={open} setOpen={setOpen} />
        <MenuDesktop />
    </header>
    </MaxWithBgColorContainer>
  )
}

export default Header
