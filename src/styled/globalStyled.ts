import { createGlobalStyle, type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#9400D3",
    secondary: "#008B8B",
    background: "#EE82EE",
    text: "#000000",
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
  }
`;
