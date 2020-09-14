import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";

const GameTitle = styled.h2`

`;


const GamesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const games = data.allMarkdownRemark.edges;

  return (
    <DefaultLayout location={location} title={siteTitle}>
      { games.map( ({node}) => {
        const gameTitle = node.frontmatter.title || node.fields.slug;
        return (
          <section>
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
