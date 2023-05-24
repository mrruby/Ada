import styled from "styled-components"

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.45rem;
  padding-bottom: 0;
`

export const DesktopRowMobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 2rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 1.8em;
    font-weight: normal;
  }
  h2 {
    font-size: 1.5em;
    font-weight: normal;
  }
  h4 {
    font-size: 1.2em;
    font-weight: normal;
  }
`

export const PrimaryButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.7rem 1.3rem;
  border: 0px;
  border-radius: 30px;
  transition: 0.5s ease-out;
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.darkPink};

  &:hover {
    box-shadow: inset 300px 0 0 0 ${({ theme }) => theme.colors.darkPink};
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const SmallParagraphContainer = styled.div`
  margin-bottom: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-size: 1rem;
`

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
