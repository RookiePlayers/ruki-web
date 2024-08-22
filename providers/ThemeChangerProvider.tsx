import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

import { createTheme, Theme } from '@mui/material/styles';
import { DarkTheme, LightTheme } from "../utils";
import { ThemeData } from "../types";

type ThemeChangerProviderProps = {
    children: React.ReactNode
}
type ThemeChangerContextType = {
    currentTheme: Theme,
    updateTheme: (theme: 'dark' | 'light') => void,
    themeData: ThemeData
}
export const ThemeChangerContext = createContext<ThemeChangerContextType  | null>(null);

export const useThemeChanger = () => {
    const context = React.useContext(ThemeChangerContext);
    if (!context) {
        throw new Error('useThemeChanger must be used within a ThemeChangerProvider');
    }
    return context;
}

 export default function ThemeChangerProvider ({
  children
 }: ThemeChangerProviderProps){
  
    const createThemeFromThemeData = (themeData: ThemeData) => {
      
      return createTheme({
        palette: {
          mode: themeData.mode,
          background: {
            paper: themeData.colors.background.card,
            default: themeData.colors.background.default
          },
          text: {
            primary: themeData.colors.text.primary,
            secondary: themeData.colors.text.secondary
          },
          primary: {
            main: themeData.colors.primary
          },
          secondary: {
            main: themeData.colors.secondary
          }
        }
      })
    }
     
      const [currentTheme,setTheme] = useState<Theme>(createThemeFromThemeData(DarkTheme));
      const [themeData, setThemeData] = useState<ThemeData>(DarkTheme);
      const updateTheme=(theme: 'dark' | 'light')=>{
            setThemeData(theme === 'dark' ? DarkTheme : LightTheme);
            setTheme(theme === 'dark' ? createThemeFromThemeData(DarkTheme) : createThemeFromThemeData(LightTheme))
      }

     return <ThemeChangerContext.Provider value={
        {
             currentTheme,
              themeData,
            updateTheme
        }
     }>
         {children}
     </ThemeChangerContext.Provider>
 }

