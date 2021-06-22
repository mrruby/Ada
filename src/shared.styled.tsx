import styled from "styled-components"

export const DesktopRowMobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 2rem;
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
