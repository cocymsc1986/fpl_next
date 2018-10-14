import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	h2 {
		margin: 0 0 ${theme.spacing}
	}

	.c-highest-rated {
		max-width: ${theme.maxWidth};
		padding: ${theme.spacing};
		margin: 0 auto;
	}

	.c-highest-rated__grid {
		display: flex;
		flex-flow: wrap;
	}

	.c-highest-rated__grid h3 {
		margin-top: 0;
	}

	.c-highest-rated__grid-item {
		width: 100%;
		padding: ${theme.spacingSmall} 0;
		box-sizing: border-box;
	}

	.c-most-popular__block-content {
		padding: ${theme.spacing};
		background: ${theme.colours.black};
		color: white;
	}

	.c-highest-rated__title {
		text-transform: capitalize;
	}

	.c-highest-rated__list {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.c-highest-rated__list-item {
		display: flex;
		margin-bottom: 4px;
	}

	.c-highest-rated__name {
		font-weight: bold;
		width: 60%;
		cursor: pointer;
	}

	.c-highest-rated__name div:hover {
		text-decoration: underline;
	}

	.c-highest-rated__team {
		font-weight: normal;
		font-size: 14px;
		cursor: pointer;
	}

	.c-highest-rated__cost {
		width: 20%;
	}

	.c-highest-rated__points {
		width: 20%;
	}

	@media (min-width: ${theme.breakpoints.small}) {
		.c-highest-rated__grid-item {
			width: 50%;
		}
	}

	@media (min-width: ${theme.breakpoints.medium}) {
		.c-highest-rated__grid-item {
			width: 25%;
		}
	}
`