import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-upcoming-fixtures {
		width: 60%;
		margin-left: ${theme.spacingValue * 2}px;
	}

	.c-upcoming-fixtures__header:first-child {
		margin-top: 0;
	}

	.c-upcoming-fixtures__header {
		margin-bottom: ${theme.spacingValue / 2}px;
	}

	.c-upcoming-fixtures__table {
		background: ${theme.colours.green};
		border-spacing: 0;
		width: 100%;
	}

	.c-upcoming-fixtures__table td {
		border-bottom: 2px solid ${theme.colours.greyDarkest};
		padding: ${theme.spacingValue / 2}px ${theme.spacing};
	}

	.c-upcoming-fixtures__table td p {
		font-size: 14px;
		margin: 0;
		text-align: center;
	}

	.c-upcoming-fixtures__table tr:last-child td {
		border-bottom: none;
	}

	.c-upcoming-fixtures__team {
		border-right: 2px solid ${theme.colours.greyDarkest};
	}
`;