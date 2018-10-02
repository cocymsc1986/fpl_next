import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-search {
		position: relative;
		margin: ${theme.spacingValue / 2}px 0 ${theme.spacing};
	}

	.c-search__wrapper {
		border-bottom: 2px solid ${theme.colours.greyDarkest};
		max-width: ${theme.maxWidth};
		margin: 0 auto;
	}

	.c-search__input {
		width: calc(100% - ${theme.spacing} * 2);
		font-size: ${theme.font.size.lead};
		padding: ${theme.spacing};
		border: none;
	}

	.c-search__input::placeholder {
		font-family: ${theme.font.familyDefault};
		color: ${theme.colours.grey};
	}

	.c-search__input:focus {
		outline: none;
	}

	.c-search__results-list {
		position: absolute;
		top: 32px;
		min-width: 400px;
		font-size: ${theme.font.size.lead};
		padding: ${theme.spacingSmall};
		background: white;
		border: 1px solid ${theme.colours.green};
		cursor: pointer;
		list-style-type: none;
		z-index: 1;
		box-shadow: 0px 4px 15px -4px black;
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