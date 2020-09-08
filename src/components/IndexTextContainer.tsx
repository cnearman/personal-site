import React from "react"
import styled from "styled-components";

const TextElement = styled.span`
	display: block;
	font-size: 72px;
  	color: #fff;
  	margin-top: 8px;
  	margin-bottom: 8px;
  	line-height: 72px;
`;

const TextElementContainer = styled.section`
  	margin-left: 10%;
  	margin-top: 118px;
`;

const IndexTextContainer = (props) => {
	return (
		<TextElementContainer>
			{props.phrases && props.phrases.map((element) => (
				<TextElement>{element}</TextElement>
			))}
		</TextElementContainer>
	);
}

export default IndexTextContainer;