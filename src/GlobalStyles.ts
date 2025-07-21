import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;

    /* Scrollbar para todos os elementos com overflow */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.colors.blue} transparent`};
  }

  /* Scrollbar customizada para navegadores WebKit (Chrome, Edge, Safari) */
  *::-webkit-scrollbar {
    width: ${p => p.theme.sizes.sm};
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html, body {
    height: 100vh;
    font-size: ${({ theme }) => theme.sizes.md};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;
