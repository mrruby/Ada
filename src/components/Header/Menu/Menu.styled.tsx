import styled from "styled-components"

export const StyledMenu = styled.div<{ open: boolean }>`
  text-align: left;
  padding: 2rem 1.0875rem;
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 100%;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.secondary};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
  }
  a {
    text-align: center;
    display: block;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s linear;
    position: relative;
    @media (min-width: ${({ theme }) => theme.dimensions.mobile}) {
      display: inline;
      padding: 0.5rem 0.5rem;
      font-size: 1.3rem;
      &:hover:after {
        background-color: ${({ theme }) => theme.colors.tertiary};
        width: 100%;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }

    &:after {
      background-color: transparent;
      content: "";
      width: 0;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: translate3d(0, 0, 0);
      transition: width 0.2s ease;
    }
  }
`
