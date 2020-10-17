/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import {
  GlobalStyles,
  Container,
  InnerContainer,
  Main,
  Footer,
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
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </InnerContainer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
