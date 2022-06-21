import { useState, ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useProductContext } from '@src/contexts/app.context'
import Image from 'next/image'
import { Loading } from '@components/Loading'

const Shop: NextPage = () => {

    const { products, loading } = useProductContext();
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;
    const offset = (currentPage - 1) * itemsPerPage;
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handleChange = (e: ChangeEvent<unknown>) => {
        const { textContent } = e.target as HTMLInputElement;
        setCurrentPage(Number(textContent));
    };

    const productsList = products.slice(offset, offset + itemsPerPage).map(product => {
        return (
            <Grid xs={12} sm={6} md={4} lg={3} item key={product.id}>
                <Paper elevation={3} >
                    <Image src={product.image} alt={product.title} width={200} height={200} />
                    <Box px={1} >
                        <Typography variant='subtitle1' component='h2' sx={{ fontFamily: 'inherit', fontWeight: '600' }}>
                            {product.title}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        )
    })

    return (
        <Container
            maxWidth='xl'
            component={'main'}
            sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh', flexWrap: 'wrap', width: '100%' }}
        >

            <Head>
                <title>Shop Itmes</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? <Loading /> :

                <>
                    <Grid container spacing={3} sx={{ p: 10 }}>
                        {productsList}
                    </Grid>
                    <Pagination count={pageCount} page={currentPage} onChange={handleChange} size='large' color='primary' />
                </>
            }



        </Container>
    )
}

export default Shop
