import { ThemeData } from "./types";

export const ThemeSettings: ThemeData = {
    mode: 'dark',
    colors: {
        primary: '#1a1a1a',
        secondary: '#fff',
        accent: '#f00',
        background: {
            card: '#333',
            default: '#000'
        },
        text: {
            primary: '#fff',
            secondary: '#aaa'
        }
    },
    fonts: {
        primary: 'Arial',
        secondary: 'Roboto'
    },
    breakpoints: {
        mobile: '768px',
        tablet: '1024px',
        desktop: '1440px'
    }
}

export const DarkTheme: ThemeData = {
    ...ThemeSettings,
    mode: 'dark',
    colors: {
        ...ThemeSettings.colors,
        background: {
            default: '#1a1a1a',
            card: '#333'
        },
        text: {
            primary: '#fff',
            secondary: '#aaa'
        }
    }
}

export const LightTheme: ThemeData = {
    ...ThemeSettings,
    mode: 'light',
    colors: {
        ...ThemeSettings.colors,
        background: {
            default: '#f5f5f5',
            card: '#f5f5f5'
        },
        text: {
            primary: '#000',
            secondary: '#555'
        }
    }
}