import css from "styled-jsx/css";

import theme from "./theme";

export default css`
  .c-team-fixtures {
    width: 100%;
    max-width: ${theme.maxWidth};
    background: ${theme.colours.green};
    border-spacing: 0;
    margin: 0 auto;
  }

  .c-team-fixtures__item {
    border-bottom: 2px solid ${theme.colours.greyDarkest};
    padding: ${theme.spacingValue}px ${theme.spacingValue / 2}px;
    text-align: center;
  }

  .c-team-fixtures__item:first-child {
    border-right: 2px solid ${theme.colours.greyDarkest};
    text-align: left;
  }

  .c-team-fixtures__row:last-child .c-team-fixtures__item {
    border-bottom: none;
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    .c-team-fixtures__item {
      padding: ${theme.spacing} ${theme.spacing};
    }
  }
`;
