import { useCallback, useState } from "react";
import type { CurrentThemeNameType } from "../types/CurrentThemeNameType";
import DarkTheme from "../theme/darkTheme";
import LightTheme from "../theme/lightTheme";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";


type ThemeContextProps = {
    children: React.ReactNode
}


export const ThemeContextProvider: React.FC<ThemeContextProps> = ({children}) => {

    const [currentTheme, setCurrentTheme] = useState<CurrentThemeNameType>("light");

    const theme = currentTheme === "light" ? LightTheme : DarkTheme;

    const toggleTheme = useCallback(() => setCurrentTheme(current => current === "light" ? "dark" : "light"), []);

    return(
        <ThemeContext.Provider value={{theme, toggleTheme, currentTheme}}>
            {children}
        </ThemeContext.Provider>
    );
    
};