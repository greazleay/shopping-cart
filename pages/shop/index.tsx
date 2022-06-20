import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

const Shop: NextPage = () => {
    return (
        <Container maxWidth='desktop' component={'main'} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh', flexWrap: 'wrap', width: '100%' }}>
            <Head>
                <title>Shop Itmes</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Pagination count={4} color='primary' size='large' variant='outlined'></Pagination>

        </Container>
    )
}

export default Shop
