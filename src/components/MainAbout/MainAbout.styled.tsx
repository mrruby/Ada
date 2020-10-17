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

export const Title = styled.h2``
