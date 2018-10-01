import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	header {
		background: ${theme.colours.green};
		padding: ${theme.spacing};
	}

	h1 {
		font-family: "Arial";
		font-size: ${theme.font.size.header};
		margin: 0;
	}
`;