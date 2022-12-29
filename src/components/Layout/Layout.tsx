/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ThemeProvider } from "styled-components"

import {
  GlobalStyles,
  Container,
  InnerContainer,
  Main,
  Footer,
  StyledLink,
  Column,
} from "./Layout.styled"
import Header from "../Header"
import { theme } from "./theme"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <GlobalStyles />
        <InnerContainer>
          <Main>{children}</Main>
          <Footer>
            <Column>
              <span>© {new Date().getFullYear()}, Dawid Urbas Get Bold</span>
              <span>ul. Żołnierzy Września 79/6, 41-500 Chorzów</span>
              <span>NIP: 6272725565</span>
            </Column>

            <div>
              <StyledLink to="/policy">
                Polityka prywatności & plików cookie
              </StyledLink>
              <StyledLink to="/terms">Regulamin</StyledLink>
            </div>
          </Footer>
        </InnerContainer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
