import React from "react"
import { graphql, navigate, Link} from "gatsby"
import DefaultLayout from "../components/DefaultLayout"
import SEO from "../components/seo"
import backgroundImage from "@assets/blog-default.jpg";

const BlogIndex = ({ data, location, pageContext}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const {previousPagePath, nextPagePath} = pageContext;

  return (
    <DefaultLayout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
            <article onClick={() => navigate(node.fields.slug)} key={node.fields.slug} style={{border: "solid 1px #dedede", boxShadow: "0px 12px 14px 1px #b5b5b5"}}>
              <section style={{height: "200px", backgroundImage: `url(${backgroundImage})`}}>
              </section>
              <header style={{padding: "10px 12px 0px"}}>
                <h3 style={{fontSize: "xx-large", textDecoration : "none"}}>{title}</h3>
              </header>
              <section style={{padding: "14px"}}>
                <p
                  style={{color:"black"}}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
        )
      })}
      <Link to={previousPagePath}>Previous</Link>
      <Link to={nextPagePath}>Next</Link>
    </DefaultLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "blogpost"}}}, skip: $skip, limit: $limit) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }`
