import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-fixtures {
		display: inline-block;
	}

	.c-fixtures__list {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	.c-fixtures__list-item {
		display: flex;
	}

	.c-fixtures__home {
		width: 45px;
		padding: 4px;
		text-align: right;
		margin-right: ${theme.spacingSmall};
	}

	.c-fixtures__away {
		width: 45px;
		padding: 4px;
		margin-left: ${theme.spacingSmall};
	}

	.c-fixtures__game-status {
		display: inline-block;
		width: 40px;
		padding: 4px;
		background: ${theme.colours.greyDarkest};
		color: white;
		text-align: center;
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