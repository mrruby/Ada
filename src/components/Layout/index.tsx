import React from "react"
import Footer from "../Footer";
import Header from "../Header";
import { LayoutElements } from "../Layout/elements";
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"

type LayoutElements = {
  flowerBlue?: boolean;
  starPink?: boolean;
  flowerWhite?: boolean;
  twoBlueFlowers?: boolean;
  flowerBlue2?: boolean;
};
  
  type Props = {
    children: React.ReactNode;
  } & LayoutElements;

  const defaultProps: LayoutElements = {
    flowerBlue: false,
    starPink: false,
    flowerWhite: false,
    twoBlueFlowers: false,
    flowerBlue2: false,
  };

  const Layout: React.FC<Props> = ({
    children,
    ...layoutElements
  }) => {

  return (
    <ThemeProvider theme={theme}>
    <div className="antialiased min-h-screen max-w-full overflow-hidden flex flex-col scroll-smooth relative text-ada-blue">
        <Header />
        {children}
        <Footer />
        <LayoutElements {...defaultProps} {...layoutElements} />
    </div>
    </ThemeProvider>
  )
}

export default Layout
