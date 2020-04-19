import styled from "styled-components"

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.dimensions.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`
