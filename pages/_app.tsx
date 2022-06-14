import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Layout } from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {

    const WebFont = require('webfontloader')
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
