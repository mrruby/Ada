import styled from "styled-components"

export const DesktopRowMobileColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.dimensions.desktop}) {
    position: static;
    flex-direction: column;
    align-items: center;
  }
`

export const PrimaryButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
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

export const Container = styled.div`
  padding: 30px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`
