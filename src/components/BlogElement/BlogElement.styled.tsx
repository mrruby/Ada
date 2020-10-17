import styled from "styled-components"
import { Link } from "gatsby"

export const Image = styled.img`
  float: left;
  width: 20rem;
  height: 22rem;
  object-fit: cover;
`

export const Button = styled(Link)`
  font-style: italic;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.instaxShadow};
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.dimensions.desktop}) {
    margin-top: 3rem;
  }
`
