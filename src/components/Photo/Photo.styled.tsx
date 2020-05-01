import styled from "styled-components"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import ScrollAnimation from "react-animate-on-scroll"

export const Container = styled.a<{ rotate: number }>`
  padding: 1rem;
  padding-bottom: 2rem;
  background: ${({ theme }) => theme.colors.white};
  display: inline-block;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.instaxShadow};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  transform-origin: center 120%;
`

export const AnimationOutside = styled(ScrollAnimation).attrs({
  animateIn: "bounceInLeft",
  animateOnce: true,
})`
  display: inline-block;
`

export const AnimationInside = styled(ScrollAnimation).attrs({
  animateIn: "rotateIn",
  animateOnce: true,
})`
  display: inline-block;
`
