import styled from "styled-components"

export const StyledMenu = styled.div<{ open: boolean }>`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 2rem 1.0875rem;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 100%;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.secondary};
  }
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
      font-size: 1.5rem;
      text-align: center;
      display: block;
    }
    &:not(:last-child) {
      padding-right: 1rem;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`
