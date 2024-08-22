import { ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeChangerProvider, { useThemeChanger } from '../providers/ThemeChangerProvider'

function MyApp({ Component, pageProps }: AppProps) {

  return <ThemeChangerProvider>
    <RukiSite Component={Component} pageProps={pageProps} />
    </ThemeChangerProvider>
}

const RukiSite = ({ Component, pageProps }: any) => {
  const {
    currentTheme,
  } = useThemeChanger();

  return <ThemeProvider theme = {currentTheme} >
      <Component {...pageProps} />

  </ThemeProvider>
}

export default MyApp
