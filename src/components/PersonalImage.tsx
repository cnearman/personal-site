import React from "react"
import styled from "styled-components";
import silhouette from "@assets/nearman-index.png";
import { media } from "@styles";

const ImagePlacer = styled.div`
	width: 686px;
	height: 705px;
	position: absolute;
	bottom: 0;
	right: -11px;
	${media.desktop`
		width: 100%;
		height: auto;
	`};
	margin:0px;
`

const PersonalImage = () => {
	return (
		<ImagePlacer>
			<img src={silhouette} />
		</ImagePlacer>
	);
}

export default PersonalImage;