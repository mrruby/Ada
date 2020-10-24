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

export const Container = styled.div`
  padding: 30px;
`
