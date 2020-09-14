import css from "styled-jsx/css";

import theme from "./theme";

export default css`
  .c-footer {
    padding-top: ${theme.spacingValue * 2}px;
    padding-bottom: ${theme.spacingValue * 2}px;
    padding-left: ${theme.spacing};
    padding-right: ${theme.spacing};
    background: ${theme.colours.greyDarkest};
    color: white;
    margin-top: ${theme.spacingValue * 2}px;
  }

  .c-footer__container {
    display: flex;
    max-width: ${theme.maxWidth};
    margin: 0 auto;
  }

  .c-footer__container div {
    flex-grow: 1;
  }
`;
