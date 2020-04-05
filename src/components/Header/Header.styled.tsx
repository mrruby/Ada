import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.primary};
  margin-bottom: 1.45rem;
`

export const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
`
