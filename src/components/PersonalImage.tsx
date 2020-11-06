import React from "react"
import styled from "styled-components";
import silhouette from "@assets/nearman-index.png";
import { media } from "@styles";

const ImagePlacer = styled.div`
	width: 686px;
	height: 705px;
	position: fixed;
	bottom: 0px;
	right: 0px;
	z-index: -1;
	overflow: hidden;
	${media.desktop`
		width: 100%;
		height: auto;
		max-height: 580px;
		max-width: 500px;
		display:flex;
		align-items: flex-end;
	`};
`

const ImageObject = styled.img`
	margin:0px 0px;
	${media.desktop`
		width: 100%;
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