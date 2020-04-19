import styled from "styled-components"

export const Container = styled.div`
  margin: 1rem 0;
  top: 0;
  right: 0;
  position: absolute;
  @media (max-width: ${({ theme }) => theme.dimensions.desktop}) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
