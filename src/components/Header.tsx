import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
import { navigationLinks }  from "@config";
import { media } from "@styles";

const HeaderContainer = styled.header`
	width: 100%;
	margin: auto 0px;
	display: flex;
	align-items: center;
	padding: 16px 55px;
	justify-content: space-between;
	${media.desktop`
		padding-left: 10px;
		padding-right: 10px;
	`};
`;

const NavLinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items:center;
	font-weight: 700;
	font-size: 32px;
	display: flex;
	alight-items: center;
	${media.desktop`display:none;`};
`;

const NavList = styled.ol`
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
	align-items:center;
`;

const NavListItem = styled.li`
	margin: 0 10px;
	&:hover {
  		transition: all 0.2s ease-in;
  		transform: translateY(-10px);
  		text-shadow: 2px 3px 10px #0000006b;
  	}

  	@keyframes slide-up {
	  0% {
	    transform: translate(0, 0);    
	  }
	  100% {
	    transform: translate(0, -10px);
	  }
	}
`;

const NavListLink = styled(Link)`
  	padding: 12px 62px;
  	color: #fff;
  	box-shadow: none;
  	letter-spacing: 2px;
  	text-decoration: none;
`;

const Logo = () => {
	return (
		<a href="/" style={{ boxShadow : "none", color: "inherit" }}>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.02 88.05" style={{enableBackground : "new 0 0 84.02 88.05"}}  width="88" height="88">
				<text transform="matrix(1 0 0 1 23.1979 62.4833)" style={{fill:"#FFFFFF", fontFamily:"neue-haas-grotesk-display, sans-serif", fontSize:"54px"}}>N</text>
				<g id="border">
					<rect x="3.92" y="3.76" style={{ fill:"none", stroke:"#FFFFFF", strokeWidth:"8" }} width="76.35" height="80.34"/>
				</g>
			</svg>
		</a>
	);
}

function useWindowSize() {
	const[windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);

	}, []);

	return windowSize;
}

const Header = () => {
  	const [isMenuOpen, setIsMenuOpen] = useState(false);
  	const size = useWindowSize();

	return (
		<HeaderContainer>
			<Logo/>
			<NavLinkContainer>
				<NavList>
					{ navigationLinks &&
					  navigationLinks.map(({name, url}, index) => (
						<NavListItem key={name} id={`navListItem${index + 1 }`}>
							<NavListLink to={url}>{name}</NavListLink>
						</NavListItem>
					))}
				</NavList>
			</NavLinkContainer>
		</HeaderContainer>
	);
}


export default Header;