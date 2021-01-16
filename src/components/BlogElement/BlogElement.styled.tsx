import styled from "styled-components"
import { Link } from "gatsby"

export const ImageContainer = styled.div`
  overflow: hidden;
`

export const Image = styled.img`
  float: left;
  width: 18rem;
  height: 22rem;
  object-fit: cover;
  margin-bottom: 0;
  transition: all 0.5s ease 0s;
  &:hover {
    transform: scale(1.2);
  }
`

export const Button = styled(Link)`
  font-style: italic;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

export const TagsBloc = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 0.2rem 1rem;
`

export const TagsText = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

export const Container = styled.div<{ reverse: boolean }>`
  margin: 2rem 1rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  ${(props) => props.reverse && "flex-direction: row-reverse;"};
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    flex-direction: ${(props) =>
      props.reverse ? "column-reverse;" : "column;"};
  }
`

export const Column = styled.div<{ reverse: boolean }>`
  text-align: center;
  width: 45%;

  ${(props) =>
    props.reverse
      ? `:last-child {
    margin-right: 10%;
  }`
      : `:first-child {
    margin-right: 10%;
  }};`}
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 100%;
  }
`

export const Title = styled.h2``
