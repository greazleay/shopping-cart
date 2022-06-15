import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Layout } from '@components/Layout'
import { ThemeProvider } from '@mui/material'
import { theme } from '@theme'
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {

    const WebFont = require('webfontloader')
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins', 'Quicksand']
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
