import type { ITheme } from "../interfaces/ITheme";
import CommomThemes from "./CommomTheme";


const LightTheme:  ITheme = {
  colors: {
    background: "#fafafa",
    text: "#02021d",
    primary: "#f0f0f0", 
    secundary: "#e3e3e3", 
    tertiary: "#cccccc", 
    quaternary: "",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#adadad",
    blue: "#0052f5",
  },
  ...CommomThemes
};

export default LightTheme;