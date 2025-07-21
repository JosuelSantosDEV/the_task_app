import type { CurrentThemeNameType } from "../types/CurrentThemeNameType";
import type { ITheme } from "./ITheme";

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
  currentTheme: CurrentThemeNameType
}
