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
import { useProductContext } from '@contexts/app.context'
import Image from 'next/image'
import { Loading } from '@components/Loading'
import { Sidebar } from '@components/Sidebar'
import { theme } from '@src/themes/theme'

const Shop: NextPage = () => {

    const { filteredProducts, loading, itemsPerPage, offset, pageCount, currentPage, handlePaginate } = useProductContext();

    const productsList = filteredProducts.slice(offset, offset + itemsPerPage).map(product => {
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
            sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center  ', minHeight: '100vh', flexWrap: 'wrap', width: '100%' }}
        >

            <Head>
                <title>Shop Itmes</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? <Loading /> :
                <>
                    <Box width={'20%'}>
                        <Sidebar />
                    </Box>

                    <Box width={'70%'} sx={{ display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Grid container spacing={3} sx={{ p: 10 }}>
                            {productsList}
                        </Grid>
                        <Pagination
                            color='secondary'
                            count={pageCount}
                            page={currentPage}
                            size='large'
                            onChange={(e, page) => handlePaginate(e, page)}
                            sx={{ color: 'white' }}
                        />
                    </Box>
                </>
            }

        </Container>
    )
}

export default Shop
