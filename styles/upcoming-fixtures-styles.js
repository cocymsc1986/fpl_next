import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-upcoming-fixtures {
		width: 100%;
		margin-top: ${theme.spacing};
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
		padding: ${theme.spacingValue / 2}px;
	}

	.c-upcoming-fixtures__table td p {
		font-size: ${theme.font.size.xsmall};
		margin: 0;
		text-align: center;
	}

	.c-upcoming-fixtures__table tr:last-child td {
		border-bottom: none;
	}

	.c-upcoming-fixtures__team {
		border-right: 2px solid ${theme.colours.greyDarkest};
		font-size: ${theme.font.size.small};
	}

	@media (min-width: ${theme.breakpoints.medium}) {
		.c-upcoming-fixtures {
			width: auto;
			flex-grow: 1;
			margin-top: 0;
		}
	}

	@media (min-width: ${theme.breakpoints.large}) {
		.c-upcoming-fixtures__table td p {
			font-size: ${theme.font.size.small};
		}

		.c-upcoming-fixtures__team {
			font-size: 16px;
		}
	}
`;