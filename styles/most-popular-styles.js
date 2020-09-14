import css from "styled-jsx/css";

import theme from "./theme";

export default css`
  h2,
  h3 {
    margin: 0 0 ${theme.spacing};
  }

  a,
  a:visited {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .c-most-popular {
    max-width: ${theme.maxWidth};
    margin: 0 auto ${theme.spacing};
  }

  .c-most-popular__wrapper {
    display: flex;
    flex-flow: wrap;
  }

  .c-most-popular__header {
    max-width: ${theme.maxWidth};
    padding: ${theme.spacing};
    margin: 0 auto;
  }

  .c-most-popular__header h2 {
    margin: 0;
  }

  .c-most-popular__block {
    width: 100%;
    padding: ${theme.spacingSmall};
    box-sizing: border-box;
    flex-grow: 1;
  }

  .c-most-popular__block-content {
    position: relative;
    padding: ${theme.spacing};
    background: ${theme.colours.black};
    color: white;
    overflow: hidden;
  }

  .c-most-popular__block-content h3 {
    font-weight: 100;
  }

  .c-most-popular__value {
    color: ${theme.colours.green};
  }

  .c-most-popular__image-container {
    position: absolute;
    bottom: -90px;
    right: ${theme.spacing};
  }

  .c-most-popular__image {
    height: 200px;
  }

  @media (min-width: ${theme.breakpoints.small}) {
    .c-most-popular__block {
      width: 50%;
    }
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    .c-most-popular__block {
      width: 25%;
    }

    .c-most-popular__image-container {
      display: none;
    }
  }

  @media (min-width: ${theme.breakpoints.xlarge}) {
    .c-most-popular__image-container {
      display: block;
    }

    .c-most-popular__wrapper {
      margin: 0 -8px;
    }
  }
`;
