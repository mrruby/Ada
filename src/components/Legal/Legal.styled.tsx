import styled from "styled-components"

export const Container = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;

  border-radius: 30px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
`
