import React from "react";

import { rhythm } from "../utils/typography"

const DefaultLayout = ({ location, title, children }) => {
  return (
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
  )
}

export default DefaultLayout;