import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { useTheme } from "../hook/useTheme";

type ThemeProviderProps = {
    children: React.ReactNode;

}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const {theme} = useTheme();
    return (

        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>

    );
};