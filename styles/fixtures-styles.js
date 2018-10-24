import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	a,
	a:visited {
		color: white;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.c-fixtures__header {
		text-align: center;
		color: white;
		margin-top: 0;
	}

	.c-fixtures__list {
		background: ${theme.colours.greyDarkest};
		/* Specific width for height calc */
		padding: 23px ${theme.spacing};
		margin: 0;
		list-style-type: none;
	}

	.c-fixtures__list-item {
		display: flex;
		height: 42px;
	}

	.c-fixtures__home {
		flex: 1;
		padding: 4px;
		text-align: right;
		margin-right: ${theme.spacingSmall};
	}

	.c-fixtures__away {
		flex: 1;
		padding: 4px;
		margin-left: ${theme.spacingSmall};
	}

	.c-fixtures__game-status {
		display: inline-block;
		width: 50px;
		padding: 0 4px 4px;
		background: ${theme.colours.greyDarkest};
		color: white;
		text-align: center;
	}

	.c-fixtures__score {
		font-size: 20px;
	}

	.c-fixtures__ko-time {
		font-size: ${theme.font.size.xsmall};
	}

	.c-fixtures__button {
		font-size: ${theme.font.size.body};
		width: 50%;
		color: ${theme.colours.greyDarkest};
		background: ${theme.colours.green};
		border: none;
		padding: ${theme.spacing};
		cursor: pointer;
	}

	.c-fixtures__button:hover {
		background: ${theme.colours.greyDarkest};
		color: white;
	}

	@media (min-width: ${theme.breakpoints.medium}) {
		.c-fixtures__wrapper {
			margin-right: ${theme.spacing};
		}
	}
`;