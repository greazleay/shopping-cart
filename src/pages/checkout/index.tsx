import type { NextPage } from 'next'
import Head from 'next/head';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

const Checkout: NextPage = () => {
    return (
        <Container
            maxWidth='xl'
            component={'main'}
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center  ',
                minHeight: '100vh',
                flexWrap: 'wrap',
                width: '100%'
            }}
        >

            <Head>
                <title>Shopping Cart | Checkout</title>
                <meta name='description' content='checkout' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box>
                <Typography variant='h1'>
                    UNDER CONSTRUCTION
                </Typography>
            </Box>
        </Container>
    )
}

export default Checkout