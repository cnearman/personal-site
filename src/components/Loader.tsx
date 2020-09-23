import React, {useState, useEffect} from 'react';
import anime from 'animejs';
import styled from "styled-components";
import Cookies from 'universal-cookie';

const Background = styled.div`
	background-color: #0F1F2C;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
`;

const cookies = new Cookies;

const Loader = ({onLoadingCompleteCallback}) => {
	let loaderCookie = cookies.get('loaderComplete');
	const animateEntry = () => {
		const loader = anime.timeline({
  			easing: 'easeOutExpo',
			complete: () => {setIsComplete(true);cookies.set('loaderComplete', 'true')}
		});

		loader.add({
			delay: 0,
			targets: '#loaderBackground',
			zIndex: 0,
			duration: 1
		}).add({
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
		if (!loaderCookie){
	    	animateEntry();
		} else {
			setIsComplete(true);
		}
  	}, [])

	var result = !isComplete 
		? <div style= {{backgroundColor: "#0F1F2C", position: "absolute", top: "0px", left: "0px",	width: "100vw",	height: "100vh", zIndex: 99}} id="loaderBackground" /> 
		: null;

  	return result;
};

export default Loader;