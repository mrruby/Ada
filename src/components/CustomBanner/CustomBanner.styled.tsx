import styled from "styled-components"

export const Container = styled.div<{ reverse: boolean }>`
  margin: 2rem 1rem;
  display: flex;

  ${(props) => props.reverse && "flex-direction: row-reverse;"};
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    flex-direction: ${(props) =>
      props.reverse ? "column-reverse;" : "column;"};
    margin: 0 1rem;
  }
`

export const Column = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.45rem;
  padding-bottom: 0;
`

export const Border = styled.div<{ width: number; height: number }>`
  height: ${(props) => props.height}rem;
  margin-bottom: 1.5rem;
  width: ${(props) => props.width}%;
  background-color: ${({ theme }) => theme.colors.darkPink};
`

export const MainBox = styled.div<{ left: boolean; reverse: boolean }>`
  margin: 1rem 0;
  align-self: ${(props) => (props.left ? "start" : "flex-end")};
  height: 2rem;
  width: 6rem;
  background-color: ${({ theme, reverse }) =>
    reverse ? theme.colors.darkPink : theme.colors.darkOrange};
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    width: 0;
  }
`

export const Paragraph = styled.h2<{ isParagraph2?: boolean }>`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  ${(props) => !props.isParagraph2 && "margin-bottom: 1rem;"};
`
