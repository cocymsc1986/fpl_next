import css from "styled-jsx/css";

import theme from "./theme";

export default css`
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .c-team__container,
  .c-team__header-container {
    max-width: ${theme.maxWidth};
    margin: 0 auto;
  }

  .c-team__header-container {
    display: flex;
    align-items: center;
  }

  .c-team__header {
    padding: ${theme.spacing};
    border-bottom: 5px solid ${theme.colours.greyDarkest};
  }

  .c-team__badge {
    width: 30%;
    max-width: 200px;
  }

  .c-team__badge img {
    max-width: 200px;
  }

  .c-team__name {
    padding: ${theme.spacing} ${theme.spacingValue * 2}px;
  }

  .c-team__container-header {
    margin-left: ${theme.spacing};
  }

  .c-team__container table {
    border-collapse: collapse;
  }

  .c-team__container tr {
    border-bottom: 1px solid ${theme.colours.greyDark};
    height: ${theme.spacingValue * 3}px;
  }

  .c-team__container td,
  .c-team__container th {
    font-size: ${theme.font.size.small};
    text-align: center;
  }

  .c-team__container td:first-child,
  .c-team__container th:first-child {
    text-align: left;
    padding: ${theme.spacing};
  }

  @media (min-width: ${theme.breakpoints.small}) {
    .c-team__container td,
    .c-team__container th {
      min-width: 50px;
      font-size: ${theme.font.size.body};
    }

    .c-team__container-header {
      margin-left: 0;
    }

    .c-team__data {
      padding: ${theme.spacing};
    }
  }
`;
