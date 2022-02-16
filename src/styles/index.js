import { createGlobalStyle } from "styled-components";
import { colors } from "styles/theme";

const GlobalStyles = createGlobalStyle`
*,
p,
h1,
h2,
h3,
h4,
h5,
h6,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html {
  font-size: 62.5%;
    @media all and (max-width: 768px){
      font-size: 50%;
    }
  }

  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'Avenir', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    outline: none;
    color: ${colors.black};
    /* background-color: ${colors.white}; */
    background: none;
  }

  a {
    text-decoration: none;
    }


`;

export default GlobalStyles;
