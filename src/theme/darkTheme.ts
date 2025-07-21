import type { ITheme } from "../interfaces/ITheme";
import CommomThemes from "./CommomTheme";

const DarkTheme: ITheme = {
  colors: {
    background: "#212121",
    text: "#ffffff",
    primary: "#0A0A0A", 
    secundary: "#292929",
    tertiary: "#474747", 
    quaternary: "#828282",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#adadad",
    blue: "#0052f5"
  },
  ...CommomThemes
};

export default DarkTheme;