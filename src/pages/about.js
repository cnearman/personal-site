import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import DefaultLayout from "../components/DefaultLayout";
import SEO from "../components/seo"
import aboutImage from "@assets/nearmanabout.jpg";
import { Link } from 'gatsby';

const AboutTitle = styled.h1`

`;

const AboutText = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const AboutContainer = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
`;

const AboutImage = styled.img`
`;

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
      <DefaultLayout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <AboutTitle>About Chris!</AboutTitle>
      <AboutContainer>
        <AboutText>I am a software engineer from Seattle, focused on build cloud-based systems (primarily in Azure, however I've also used AWS and GCS). I've also been developing games since a young age and love participating in game jams. Check out some of my games <Link to="/games">here!</Link></AboutText>
        <AboutImage src={aboutImage} />
      </AboutContainer>
      </DefaultLayout>
    )
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
