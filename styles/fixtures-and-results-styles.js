import css from 'styled-jsx/css';

import theme from './theme';

export default css`
	.c-fixtures-and-results {
		max-width: ${theme.maxWidth};
		margin: 0 auto;
		padding: ${theme.spacing};
	}

	.c-fixtures-and-results__header {
		margin-top: 0;
	}

	.c-fixtures-and-results__body {
		display: flex;
	}
`;