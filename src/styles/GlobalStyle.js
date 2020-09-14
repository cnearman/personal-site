import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	body {
		overflow: hidden;
		position: relative;
		height: 100vh;
		width: 100%;
		font-family: neue-haas-grotesk-display, sans-serif;
    	-ms-overflow-style: none; /* IE 11 */
    	scrollbar-width: none; /* Firefox 64 */

    	&::-webkit-scrollbar { display: none; }
    	background-color: #0F1F2C;
    	color: #fff;
	}

	h1 h2 h3 h4 h5 h6 {
		font-family: neue-haas-grotesk-display, sans-serif;
	}
`;

export default GlobalStyle;