export interface ITheme {
    colors: Colors;
    fonts: Fonts;
    medias: Medias;
    sizes: Sizes;

}

type Colors = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    black: string;
    white: string;
    gray: string;
    blue: string;
    red: string;
    
}

type Fonts = {
    primary: string;
    secondary: string;
}

type Medias = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl":string;
}

type Sizes = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl":string;
}