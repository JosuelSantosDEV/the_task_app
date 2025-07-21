import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
    }

    html {
        font-size: 62.5%;
        scroll-behavior:smooth;
    }

    html, body {
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        font-size: ${p => p.theme.sizes.md};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${p => p.theme.colors.text};
        background-color: ${p => p.theme.colors.background};
   
    }

    #root {
        height: 100%;
        width: 100%;
    }


`;