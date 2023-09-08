import React from "react"
import Footer from "../Footer";
import Header from "../Header";
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { LayoutElements } from "../Layout/elements";

type LayoutElements = {
  flowerBlue?: boolean;
  starPink?: boolean;
  flowerWhite?: boolean;
  twoBlueFlowers?: boolean;
  twoBlueFlowers2?: boolean;
  flowerBlue2?: boolean;
  flowerBlue3?: boolean;
};
  
  type Props = {
    children: React.ReactNode;
  } & LayoutElements;

  const defaultProps: LayoutElements = {
    flowerBlue: false,
    starPink: false,
    flowerWhite: false,
    twoBlueFlowers: false,
    twoBlueFlowers2: false,
    flowerBlue2: false,
    flowerBlue3: false,
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
