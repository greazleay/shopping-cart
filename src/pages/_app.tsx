import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@components/Layout'
import { ThemeProvider } from '@mui/material'
import { theme } from '@themes/theme'
import { AppContextProvider } from '@contexts/app.context'
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
