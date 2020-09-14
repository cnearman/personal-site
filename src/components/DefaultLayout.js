import React from "react";
import Header from "./Header";
import SEO from "../components/seo";
import { GlobalStyle } from '@styles';

import { rhythm } from "../utils/typography"

const DefaultLayout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <SEO title={title} />
      <GlobalStyle />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DefaultLayout;