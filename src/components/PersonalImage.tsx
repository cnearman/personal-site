import React from "react"
import styled from "styled-components";
import silhouette from "@assets/nearman-index.png";
import { media } from "@styles";

const ImagePlacer = styled.div`
	width: 686px;
	height: 705px;
	position: absolute;
	bottom: 0px;
	right: 0px;
	z-index: -1;
	${media.desktop`
		width: 100%;
		height: auto;
		max-height: 500px;
		max-width: 500px;
	`};
`

const ImageObject = styled.img`
	margin:0px 0px;
	${media.desktop`
		width: 100%;
		max-height: 500px;
		max-width: 500px;
		height: auto;
	`};
`

const PersonalImage = () => {
	return (
		<ImagePlacer>
			<ImageObject src={silhouette} />
		</ImagePlacer>
	);
}

export default PersonalImage;