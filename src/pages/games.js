import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import SEO from "../components/seo"

const GameTitle = styled.h2`

`;


const GamesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const games = data.allMarkdownRemark.edges;

  return (
      <DefaultLayout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
        { games.map( ({node}) => {
          const gameTitle = node.frontmatter.title || node.fields.slug;
          return (
            <section key={node.frontmatter.title}>
              <GameTitle>
                { gameTitle }
              </GameTitle>
              <section dangerouslySetInnerHTML={{ __html: node.html }} />
            </section>
          )
        }) }
      </DefaultLayout>
    )
};

export default GamesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "game"}}}) {
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
            type
          }
          html
        }
      }
    }
  }
`;
