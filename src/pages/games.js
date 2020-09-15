import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import SEO from "../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const GameTitle = styled.h2`

`;

const GameSection = styled.section`
  margin-bottom: 60px;
`;

const GamesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const games = data.allMarkdownRemark.edges;
  const images = data.allFile.edges.filter( (element) => element.node.childImageSharp != null);

  return (
      <DefaultLayout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
        { games.map( ({node}) => {
          const gameTitle = node.frontmatter.title || node.fields.slug;
          return (
            <GameSection key={node.frontmatter.title}>
              <GameTitle>
                { gameTitle }
              </GameTitle>
              <Carousel>
                {
                  images
                    .filter((element) => element.node.relativeDirectory === node.frontmatter.imageFilter)
                    .map(({node}) =>
                      <img src={node.childImageSharp.fluid.originalImg} alt={node.base.split('.')[0]}/>
                  )
                }
              </Carousel>
              <section dangerouslySetInnerHTML={{ __html: node.html }} />
            </GameSection>
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
    allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC}, filter: {frontmatter: {type: {eq: "game"}}}) {
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
            imageFilter
            order
          }
          html
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "games"}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
          base
        }
      }
    }
  }
`;
