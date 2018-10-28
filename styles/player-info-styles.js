import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-player__header {
		position: relative;
		border-bottom: 5px solid ${theme.colours.greyDarkest};
		margin: ${theme.spacingValue}px 0;
	}

	.c-player__header-container {
		max-width: ${theme.maxWidth};
		margin: 0 auto;
		display: flex;
	}

	.c-player__header-image {
		margin-bottom: -4px;
	}

	.c-player__header-team {
		margin-top: ${theme.spacing};
		height: 80px;
		width: 80px;
	}

	.c-player__header-values {
		font-weight: bold
	}

	.c-player__header-info {
		margin-left: ${theme.spacingValue * 2}px;
	}

	.c-player__header-info p {
		margin: 0;
	}

	.c-player__body {
		max-width: ${theme.maxWidth};
		margin: 0 auto;
	}

	.c-player__body-list {
		list-style-type: none;
		margin-left: ${theme.spacing};
		padding: 0;
	}

	.c-player__body-list li {
		margin-bottom: 4px;
	}

	.c-player__body-list span {
		font-size: 18px;
		font-weight: bold;
	}

	@media (min-width: ${theme.breakpoints.medium}) {
		.c-player__header-team {
			height: 100px;
			width: 100px;
		}
	}
`