import React, {useState, useEffect} from 'react';
import anime from 'animejs';
import styled from "styled-components";

const Background = styled.div`
	background-color: #0F1F2C;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
`;

const Loader = ({onLoadingCompleteCallback}) => {
	const animateEntry = () => {
		const loader = anime.timeline({
  			easing: 'easeOutExpo',
			complete: () => {setIsComplete(true);}
		});

		loader.add({
			delay: 0,
			targets: '#indexElement1',
			translateX: '-=1000',
			duration: 1
		}).add({
			delay: 0,
			targets: '#indexElement2',
			translateX: '-=1000',
			duration: 1
		}).add({
			delay: 0,
			targets: '#indexElement3',
			translateX: '-=1000',
			duration: 1
		}).add({
			delay: 400,
			targets: '#indexElement1',
			translateX: '+=1000',
			duration: 2000
		}).add({
			delay: 200,
			targets: '#indexElement2',
			translateX: '+=1000',
			duration: 2000
		}).add({
			delay: 200,
			targets: '#indexElement3',
			translateX: '+=1000',
			duration: 2000
		}).add({
			delay: 400,
			targets: '#loaderBackground',
			opacity: 0
		})

	};

 	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
	    animateEntry();
  	}, [])

	var result = !isComplete ? <Background id="loaderBackground" /> : null;

  	return result;
};

export default Loader;