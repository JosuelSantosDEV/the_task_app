
import { createContext } from "react";
import type { IThemeContext } from "../../interfaces/IThemeContext";


export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

