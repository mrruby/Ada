import styled from "styled-components"

export const Container = styled.div`
  margin: 3rem 0 1rem 0;
  @media (max-width: ${({ theme }) => theme.dimensions.desktop}) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
