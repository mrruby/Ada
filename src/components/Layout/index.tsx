import React from "react"
import Footer from "../Footer";
import Header from "../Header";

import { LayoutElements } from "../Layout/elements";

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
    <div className="antialiased min-h-screen max-w-full overflow-hidden flex flex-col scroll-smooth relative">
        <Header />
        {children}
        <Footer />
        <LayoutElements {...defaultProps} {...layoutElements} />
    </div>
  )
}

export default Layout
