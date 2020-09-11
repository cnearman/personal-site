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
	${media.desktop`
		width: 100%;
		height: auto;
		max-height: max-content;
		bottom: -10px;
	`};
`

const ImageObject = styled.img`
	margin:0px 0px;
`

const PersonalImage = () => {
	return (
		<ImagePlacer>
			<ImageObject src={silhouette} />
		</ImagePlacer>
	);
}

export default PersonalImage;