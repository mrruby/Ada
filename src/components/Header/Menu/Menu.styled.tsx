import styled from "styled-components"

export const StyledMenu = styled.div<{ open: boolean }>`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.secondary};
  }
  a {
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    transition: color 0.3s linear;
    padding-right: 0.5rem;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
      color: ${({ theme }) => theme.primary};
      display: block;
    }
    &:hover {
      color: ${({ theme }) => theme.tertiary};
    }
  }
`
