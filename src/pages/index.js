import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ImageBackground from "@components/ImageBackground";
import IndexTextContainer from "@components/IndexTextContainer";
import PersonalImage from "@components/PersonalImage";
import background from "@assets/background.png";
import Loader from "@components/Loader";
const Main = ({ data, location }) => {
  let phraseArray = ["Engineer.", "Creator.", "Entertainer."];

  return (
        <section>
          <Loader />
          <SEO title="Home" />
          <ImageBackground imageUrl={background} topOffset="0" leftOffset="0" />
          <IndexTextContainer phrases={phraseArray}/>
          <PersonalImage />
        </section>
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