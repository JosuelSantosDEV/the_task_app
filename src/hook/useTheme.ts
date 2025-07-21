import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

export const useTheme = () => {

    const context = useContext(ThemeContext);
    if(context){
        return context;
    }else {
        throw new Error("ThemeContext not found!!!");
    }

};