import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography'
import { useProductContext } from '@contexts/app.context'
import { Loading } from '@components/Loading'
import { Sidebar } from '@components/Sidebar'

const Shop: NextPage = () => {

    const { filteredProducts, loading, itemsPerPage, offset, pageCount, currentPage, handlePaginate } = useProductContext();

    const productsList = filteredProducts.slice(offset, offset + itemsPerPage).map(product => {
        return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Paper
                    elevation={3}
                    sx={{
                        color: 'inherit',
                        background: 'inherit',
                        border: 1,
                        borderColor: '#BDD1B2',
                        p: 1,
                        display: 'flex',
                        flexFlow: 'column wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        <Image src={product.image} alt={product.title} width={300} height={300} />
                    </Box>

                    <Box px={1} sx={{}} >
                        <Box>
                            <Typography variant='subtitle1' sx={{ fontFamily: 'inherit', fontWeight: '600' }}>
                                {product.title}
                            </Typography>

                        </Box>

                        <Box>
                            <Typography variant='subtitle2'>
                                ${product.price}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating name='read-only' value={product.rating.rate} precision={0.1} readOnly size='small' />
                            <Typography variant='body1' component={'span'} ml={1}>{product.rating.rate}</Typography>
                            <Typography variant='body1' component={'span'} ml={1}>({product.rating.count} reviews)</Typography>
                        </Box>
                    </Box>
                    <Button
                        href={`/shop/${product.id}`}
                        variant='contained'
                        sx={{
                            background: 'linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))',
                            fontFamily: 'inherit',
                            fontWeight: '600'
                        }}
                    >
                        View Product
                    </Button>
                </Paper>
            </Grid>
        )
    })

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
                <title>Shopping Cart | Products</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? <Loading /> :
                <>

                    <Sidebar />

                    <Box width={'70%'} sx={{ display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Grid container spacing={3} sx={{ py: 10 }}>
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
