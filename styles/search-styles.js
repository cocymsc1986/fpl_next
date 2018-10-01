import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-search {
		position: relative;
		padding: ${theme.spacing};
		background: ${theme.colours.blueDark};
		margin-top: 4px;
	}

	.c-search__input {
		width: calc(100% - ${theme.spacing} * 2);
		font-size: ${theme.font.size.lead};
		padding: ${theme.spacing};
		border: none;
	}

	.c-search__input::placeholder {
		color: ${theme.colours.greyLight};
	}

	.c-search__results-list {
		position: absolute;
		top: 40px;
		min-width: 400px;
		font-size: ${theme.font.size.lead};
		padding: ${theme.spacingSmall};
		background: white;
		border: 1px solid ${theme.colours.purple};
		cursor: pointer;
	}

	.c-search__result {
		padding: 4px;
	}

	.c-search__result:hover {
		text-decoration: underline;
	}

	@media (min-width: ${theme.breakpoints.medium}) {
		.c-search__input {
			width: 600px;
		}
	}
`;