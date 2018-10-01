import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	h2, h3 {
		margin: 0 0 ${theme.spacing};
	}

	a,
	a:visited {
		color: white;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.c-most-popular {
		display: flex;
		flex-flow: wrap;
		margin: ${theme.spacing} 0;
	}

	.c-most-popular__block {
		width: 100%;
		padding: ${theme.spacingSmall};
		box-sizing: border-box;
	}

	.c-most-popular__block-content {
		padding: ${theme.spacing};
		background: ${theme.colours.black};
		color: white;
	}

	.c-most-popular__block-content h3 {
		font-weight: 100; 
	}

	@media (min-width: ${theme.breakpoints.small}) {
		.c-most-popular__block {
			width: 50%;
		}
	}

	@media (min-width: ${theme.breakpoints.medium}) {
		.c-most-popular__block {
			width: 25%;
		}
	}
`