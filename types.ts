export type ThemeData = {
    mode: 'dark' | 'light',
    colors: {primary: string, secondary: string, 
        background: {card: string, default: string},
        accent: string, text: {primary: string, secondary: string}},
    fonts: {primary: string, secondary: string},
    breakpoints: {mobile: string, tablet: string, desktop: string}
}