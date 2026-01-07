import { createGlobalStyle, type DefaultTheme } from "styled-components";

// Definindo o tema com tipagem
export const theme: DefaultTheme = {
  colors: {
    primary: "#fff",
    secondary: "#fff",
    background: "#fff",
    text: "#000000",
  },
};

// Tipagem global do styled-components
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


`
