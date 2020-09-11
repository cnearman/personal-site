import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import IndexLayout from "../components/IndexLayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { indexBackgroundImageUrl } from "@config";
import ImageBackground from "@components/ImageBackground";
import IndexTextContainer from "@components/IndexTextContainer";
import PersonalImage from "@components/PersonalImage";
import background from "@assets/background.png";
import Loader from "@components/Loader";

const Main = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  let phraseArray = ["Engineer.", "Creator.", "Entertainer."];

  return (
    <IndexLayout location={location} title={siteTitle}>
      <Loader />
      <SEO title="Home" />
      <ImageBackground imageUrl={background} topOffset="0" leftOffset="0" />
      <IndexTextContainer phrases={phraseArray}/>
      <PersonalImage />
    </IndexLayout>
  )
}

export default Main;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`