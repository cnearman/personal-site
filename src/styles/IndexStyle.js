import { createGlobalStyle } from 'styled-components';

const IndexStyle = createGlobalStyle`

	body {
		overflow: hidden;
		position: relative;
		height: 100vh;
		width: 100%;
    	-ms-overflow-style: none; /* IE 11 */
    	scrollbar-width: none; /* Firefox 64 */
    	&::-webkit-scrollbar { display: none; }
	}
`;

export default IndexStyle