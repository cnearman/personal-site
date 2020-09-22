import React from "react"
import styled from "styled-components";
import silhouette from "@assets/nearman-index.png";
import { media } from "@styles";

const ImagePlacer = styled.div`
	width: 686px;
	height: 705px;
	position: absolute;
	bottom: -1px;
	right: -11px;
	z-index: -1;
	${media.desktop`
		width: 100%;
		height: auto;
		max-height: 500px;
		max-width: 500px;
		bottom: -10px;
	`};
`

const ImageObject = styled.img`
	margin:0px 0px;
	${media.desktop`
		max-height: 500px;
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