import { ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeChangerProvider, { useThemeChanger } from '../providers/ThemeChangerProvider'
import { SnackbarProvider } from 'notistack'

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
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} />
      </SnackbarProvider>

  </ThemeProvider>
}

export default MyApp
