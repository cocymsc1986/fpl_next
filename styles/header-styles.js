import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	header {
		background: ${theme.colours.greyDarkest};
		padding: ${theme.spacing};
	}

	h1 {
		font-size: ${theme.font.size.header};
		margin: 0;
		color: white;
	}
`;