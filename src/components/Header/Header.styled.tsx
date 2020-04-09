import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.45rem;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.desktop};
`
