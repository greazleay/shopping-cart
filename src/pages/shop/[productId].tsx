import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Error from 'next/error'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useProductContext } from '@contexts/app.context'
import { Loading } from '@components/Loading'


const ProductDetail: NextPage = () => {

    const router = useRouter();
    const { productId } = router.query
    const { products, loading } = useProductContext();
    const product = products.find(({ }, index) => String(index + 1) === productId as string)

    if (loading) return <Loading />
    if (!product) return <Error statusCode={404} />

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
                <title>Shopping Cart | Product Detail</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box>
                <Typography variant='subtitle1'>{product?.title}</Typography>
            </Box>


        </Container>
    )
}

export default ProductDetail