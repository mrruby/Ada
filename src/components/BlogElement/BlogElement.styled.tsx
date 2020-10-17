import styled from "styled-components"
import { Link } from "gatsby"

export const Image = styled.img`
  float: left;
  width: 18rem;
  height: 22rem;
  object-fit: cover;
  margin-bottom: 0;
`

export const Button = styled(Link)`
  font-style: italic;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

export const CategoryBloc = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 0.2rem 1rem;
`

export const CategoryText = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.h5`
  padding-top: 1rem;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.instaxShadow};
  background: ${({ theme }) => theme.colors.white};
`
