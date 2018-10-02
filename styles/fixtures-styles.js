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

	.c-fixtures {
		display: inline-block;
		background: ${theme.colours.greyDarkest};
	}

	.c-fixtures__list {
		padding: ${theme.spacingValue / 2}px ${theme.spacing};
		margin: 0;
		list-style-type: none;
	}

	.c-fixtures__list-item {
		display: flex;
		height: 42px;
	}

	.c-fixtures__home {
		width: 120px;
		padding: 4px;
		text-align: right;
		margin-right: ${theme.spacingSmall};
	}

	.c-fixtures__away {
		width: 120px;
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
		font-size: ${theme.font.size.small};
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
`;