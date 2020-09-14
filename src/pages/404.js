import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../components/DefaultLayout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <DefaultLayout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>We're still working on that...</h1>
      <p>We're sorry this doesn't work. The website is still a work-in-progress and hopefully we'll have that page up soon!</p>

      <a href="/">Return Home</a>
    </DefaultLayout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
