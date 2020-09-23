import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	body {
		font-family: neue-haas-grotesk-display, sans-serif;
    	background-color: #fff; 
    	color: #0F1F2C;
    	-ms-overflow-style: none; /* IE 11 */
    	scrollbar-width: none; /* Firefox 64 */
    	&::-webkit-scrollbar { display: none; }
    	${({ location }) => location === "/" && `	
			overflow: hidden;
			position: relative;
			height: 100vh;
			width: 100%;
		`}
	}

	h1 h2 h3 h4 h5 h6 {
		font-family: neue-haas-grotesk-display, sans-serif;
	}

	.slide-enter,
	.slide-exit {
	  transition: transform 1000ms ease-out;
	}

	.slide-enter {
	  transform: translateX(100%);
	}

	.slide-enter.slide-enter-active {
	  transform: translateX(0%);
	}

	.slide-exit {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  transform: translateX(0%);
	}

	.slide-exit-active {
	  transform: translateX(-100%);
	}

	a {
		color: #D8A97D;
	}
`;

export default GlobalStyle;