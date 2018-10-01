import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-highest-rated {
		padding: ${theme.spacing};
	}

	.c-highest-rated__grid {
		display: flex;
		flex-flow: wrap;
		margin: ${theme.spacing} 0;
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
		margin-bottom: 2px;
	}

	.c-highest-rated__name {
		width: 60%;
		cursor: pointer;
	}

	.c-highest-rated__name div:hover {
		text-decoration: underline;
	}

	.c-highest-rated__team {
		font-weight: bold;
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