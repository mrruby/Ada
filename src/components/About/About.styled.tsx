import styled from "styled-components"

export const Container = styled.div`
  margin: 2rem 1rem;
  display: flex;
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: 45%;
  :first-child {
    margin-right: 10%;
  }
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 100%;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.45rem;
  padding-bottom: 0;
`

export const Border = styled.div<{ width: number; height: number }>`
  height: ${(props) => props.height}rem;
  margin-bottom: 0.95rem;
  width: ${(props) => props.width}%;
  background-color: ${({ theme }) => theme.colors.darkPink};
`

export const MainBox = styled.div<{ left: boolean }>`
  margin: 1rem 0;
  align-self: ${(props) => (props.left ? "start" : "flex-end")};
  height: 2rem;
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 0;
  }
`

export const Paragraph = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
