import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ImageBackground from "@components/ImageBackground";
import IndexTextContainer from "@components/IndexTextContainer";
import PersonalImage from "@components/PersonalImage";
import background from "@assets/background.png";
import Loader from "@components/Loader";
import styled from "styled-components";
import Cookies from 'universal-cookie';

const ResetAnimationButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 0;
  background: transparent;
  font-size: 10px;
  color: #fff;
  z-index: -1;
`;

const cookies = new Cookies();

const onResetAnimationClick = () => {
  cookies.remove("loaderComplete");
  window.location.reload(false);
}

const Main = ({ data, location }) => {
  let phraseArray = ["Engineer.", "Creator.", "Entertainer."];

  return (
        <section>
          <Loader />
          <SEO title="Home" />
          <h1 style={{display: "none"}}>Chris Nearman</h1>
          <ImageBackground imageUrl={background} topOffset="0" leftOffset="0" />
          <IndexTextContainer phrases={phraseArray}/>
          <PersonalImage />
          <ResetAnimationButton onClick={onResetAnimationClick}>Reset Animation</ResetAnimationButton>
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