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
  /* Adapt the colors based on primary prop */
  display: inline-block;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 30px;
`

export const Container = styled.div`
  padding: 30px;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`
