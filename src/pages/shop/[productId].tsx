import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Error from 'next/error';
import Image from 'next/image';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useProductContext } from '@contexts/app.context';
import { Loading } from '@components/Loading';
import { ParsedUrlQuery } from 'querystring';
import { IProduct } from '@interfaces/productContext.interface';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')

    const paths = data.map((item: { id: number }) => {
        return {
            params: { productId: String(item.id) }
        }
    })

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { productId } = context.params as ParsedUrlQuery
    const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)

    return {
        props: { product: data },
    }
}

const ProductDetail = ({ product }: { product: IProduct }) => {

    // const router = useRouter();
    // const { productId } = router.query
    // const { products, loading } = useProductContext();
    // const product = products.find(({ }, index) => String(index + 1) === productId as string)

    // if (loading) return <Loading />
    // if (!product) return <Error statusCode={404} />

    return (
        <Container
            maxWidth='xl'
            component={'main'}
            sx={{
                display: 'flex',
                flexFlow: 'column wrap',
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

            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '100%' }}>
                    <Image src={product.image} alt={product.title} width={400} height={500} />
                </Box>
                <Box>
                    <Typography variant='h4'>{product.title}</Typography>
                    <Typography variant='subtitle1'>${product.price}</Typography>

                    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                        <Button>
                            <AddCircleIcon />
                        </Button>
                        <Button>0</Button>
                        <Button>
                            <RemoveCircleIcon />
                        </Button>
                    </ButtonGroup>

                    <Box>
                        <Button
                            href={`/checkout`}
                            variant='contained'
                            sx={{
                                background: 'linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))',
                                fontFamily: 'inherit',
                                fontWeight: '600'
                            }}
                        >
                            Buy Now
                        </Button>
                    </Box>

                </Box>

            </Box>

            <Stack>
                <Typography variant='h4' component={'h3'}>Description</Typography>
                <Divider />
                <Typography variant='subtitle2'>{product.description}</Typography>
            </Stack>


        </Container>
    )
}

export default ProductDetail