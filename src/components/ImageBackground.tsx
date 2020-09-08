import React from "react";

const ImageBackground = ({imageUrl, topOffset, leftOffset}) => {
	return (
		<div style={{
			backgroundImage: `url(${imageUrl})`,
			position: "absolute",
			top: topOffset,
			left: leftOffset,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			width: "100vw",
			height: "100vh",
			objectFit: "none",
			zIndex: -1
		}}>
		</div>
	);
}

export default ImageBackground;