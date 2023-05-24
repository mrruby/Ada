import styled from "styled-components"

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
