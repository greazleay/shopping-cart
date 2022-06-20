import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useProductContext } from '@contexts/app.context'
import Image from 'next/image'
import { Loading } from '@components/Loading'

const Shop: NextPage = () => {

    const { products, loading } = useProductContext();

    const productsList = products.map(product => {
        return (
            <Grid xs={12} sm={6} md={4} lg={3} item key={product.id}>
                <Paper elevation={3}>
                    <Image src={product.image} alt={product.title} width={200} height={200} />
                    <Box px={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Typography variant='subtitle1' component='h2'>
                            {product.title}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        )
    })

    return (
        <Container maxWidth='xl' component={'main'} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh', flexWrap: 'wrap', width: '100%' }}>

            <Head>
                <title>Shop Itmes</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? <Loading /> :

                <Box width={'100%'}>
                    <Grid container spacing={3}>
                        {productsList}
                    </Grid>
                    <Pagination count={4} color='primary' size='large' variant='outlined'></Pagination>
                </Box>
            }



        </Container>
    )
}

export default Shop
