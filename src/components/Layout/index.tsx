import React from "react"
import Footer from "../Footer";
import Header from "../Header";
import { LayoutElements } from "../Layout/elements";
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"

interface ILayoutElements {
    flowerBlue?: boolean;
    starPink?: boolean;
    flowerWhite?: boolean;
  }
  
  type Props = {
    children: React.ReactNode;
  } & ILayoutElements;

  const defaultProps: ILayoutElements = {
    flowerBlue: false,
    starPink: false,
    flowerWhite: false,
  };

  const Layout: React.FC<Props> = ({
    children,
    ...layoutElements
  }) => {

  return (
    <ThemeProvider theme={theme}>
    <div className="antialiased min-h-screen max-w-full overflow-hidden flex flex-col scroll-smooth relative">
        <Header />
        {children}
        <Footer />
        <LayoutElements {...defaultProps} {...layoutElements} />
    </div>
    </ThemeProvider>
  )
}

export default Layout
