import React from "react";
import { Link } from "gatsby";
import Header from "./Header";
import { GlobalStyle } from '@styles';

import { rhythm, scale } from "../utils/typography"

const IndexLayout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <GlobalStyle />
      {children}
    </div>
  )
}

export default IndexLayout;