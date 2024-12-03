import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.typography.fontFamily};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;