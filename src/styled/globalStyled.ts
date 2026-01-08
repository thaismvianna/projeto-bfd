import { createGlobalStyle, type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
colors: {
  background: "#FAE8FA",
  text: "#000000",
  salmao: "#FFCCCC",
  purple: "#9400D3",
  alert: "#FFC1FF",
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
