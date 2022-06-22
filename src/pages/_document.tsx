import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang='en'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
            </Head>
            <body style={{
                background: '#003232',
                color: 'aliceblue',
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: '600'
            }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document