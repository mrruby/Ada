import styled from "styled-components"

export const DesktopRowMobileColumn = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.dimensions.desktop}) {
    position: static;
    flex-direction: column;
    align-items: center;
  }
`
