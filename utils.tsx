import { ThemeData } from "./types";

export const ThemeSettings: ThemeData = {
    mode: 'dark',
    colors: {
        primary: '#6a04f4',
        secondary: '#32cac9',
        accent: '#f00',
        appbar:{
          background: '#010409',
            text: '#fff',
            icon: '#fff',
            shadow: '0 0 10px rgba(0,0,0,0.1)',
            border: 'thin solid #e5e7eb0a'  
        },
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
        desktop: '1240px'
    }
}
export const DarkTheme: ThemeData = {
    ...ThemeSettings,
    mode: 'dark',
    colors: {
        ...ThemeSettings.colors,
        background: {
            default: '#1a1a1a',
            card: '#333',
            gradient: ['#010409', '#030b18']
        },
        appbar:{
          background: '#010409',
            text: '#fff',
            icon: '#fff',
            shadow: '0 0 10px rgba(0,0,0,0.1)',
            border: '1px solid #333'  
        },
        text: {
            primary: '#fff',
            secondary: '#dadada'
        }
    }
}

export const LightTheme: ThemeData = {
    ...ThemeSettings,
    mode: 'light',
    colors: {
        ...ThemeSettings.colors,
        background: {
            default: '#fefeff',
            card: '#f5f5f5',
            gradient: ['#f5f5f5', '#f5f5f5']
        },
        appbar:{
            background: '#fefeff',
                text: '#000',
                icon: '#000',
                shadow: '0 0 10px rgba(0,0,0,0.1)',
                border: '1px solid #ccc'
        },
        text: {
            primary: '#000',
            secondary: '#555'
        }
    }
}

export const toPascalCase = (str: string) => {
    return str.replace(/(\w)(\w*)/g,
        function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
}