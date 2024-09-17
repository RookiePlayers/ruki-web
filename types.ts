export type ThemeData = {
    mode: 'dark' | 'light',
    colors: {primary: string, secondary: string,
        appbar?: {
            background?: string,
            text?: string,
            icon?: string,
            shadow?: string,
            border?: string
        } 
        background: {card: string, default: string, gradient?: string[]},
        accent: string, text: {primary: string, secondary: string}},
    fonts: {primary: string, secondary: string},
    breakpoints: {mobile: string, tablet: string, desktop: string}
}

export type SiteData = {
    name: string,
    slogan?: string,
    aboutSummary?: string,
    team: {name: string, role: string, img: string, description: string, linkedIn: string}[],
}