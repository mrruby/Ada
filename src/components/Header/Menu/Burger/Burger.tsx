import React from "react"
import { StyledBurger } from "./Burger.styled"

type Props = {
  open: boolean
  setOpen: (_: boolean) => void
}

const Burger = ({ open, setOpen }: Props): JSX.Element => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
