import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.footer {
		padding: ${theme.spacingValue * 2}px ${theme.spacing};
		background: ${theme.colours.greyDarkest};
		color: white;
		margin-top: ${theme.spacingValue * 2}px;
	}

	.footer__container {
		display: flex;
		max-width: ${theme.maxWidth};
		margin: 0 auto;
	}

	.footer__container div {
		flex-grow: 1;
	}
`