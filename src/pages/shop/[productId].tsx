import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useProductContext } from '@contexts/app.context';
import { Loading } from '@components/Loading';
import { ParsedUrlQuery } from 'querystring';
import { IProduct } from '@interfaces/productContext.interface';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState, SyntheticEvent } from 'react';

import RatingCard from '@components/RatingCard';
import SnackButton from '@components/SnackButton';
import CountButtons from '@components/CountButtons';

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

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='subtitle1'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductDetail = ({ product }: { product: IProduct }) => {

    const { push, query } = useRouter();
    // const { productId } = query
    const { increaseItemCount, decreaseItemCount, cartItems, addItemToCart } = useProductContext();

    const itemCount = cartItems.some(item => item.id === product?.id) ? cartItems.find(item => item.id === product?.id)?.count : 0;

    // const product = products.find(({ }, index) => String(index + 1) === productId as string) as IProduct
    // if (loading) return <Loading />
    // if (!product) return <Error statusCode={404} />

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                <title>Shopping Cart | Product Details</title>
                <meta name="description" content="shop items" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box sx={{ display: 'flex' }}>

                <Box sx={{ width: '50%' }}>
                    <Image src={product.image} alt={product.title} width={400} height={500} />
                </Box>

                <Stack spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ px: 1 }}>
                    <Typography variant='h5'>{product.title}</Typography>
                    <Typography variant='subtitle1'>${product.price}</Typography>

                    <RatingCard rating={product.rating} />

                    {!itemCount && <SnackButton product={product} addItemToCart={addItemToCart} />}

                    {itemCount as number > 0 &&
                        <>
                            <CountButtons
                                itemCount={itemCount as number}
                                productId={product.id}
                                decreaseItemCount={decreaseItemCount}
                                increaseItemCount={increaseItemCount}
                            />

                            <Box>
                                <Button
                                    onClick={() => push(`/checkout`)}
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
                        </>
                    }
                </Stack>

            </Box>

            <Box sx={{ width: '100%', border: 1, borderRadius: 2 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor='secondary'
                        indicatorColor='secondary'
                        aria-label='product description and reviews'
                    >
                        <Tab {...a11yProps(0)} label='Overview' />
                        <Tab {...a11yProps(1)} label='Description' />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim quis libero varius lacinia. Vivamus quis placerat felis, id feugiat sem. Morbi nec ornare lorem, eu interdum nisl. Morbi quis justo tellus. Vestibulum placerat, ex quis cursus scelerisque, urna lectus gravida odio, eget fermentum odio felis eleifend nibh. Vestibulum aliquam metus a neque eleifend, at posuere eros scelerisque. Maecenas nulla lorem, varius ac ipsum ultrices, congue mattis elit. Mauris nec neque id risus bibendum tincidunt quis eu purus. In convallis congue turpis at feugiat. Aenean dictum eleifend mauris, in blandit ligula dapibus sed. Nulla justo nisl, interdum quis.
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {product.description}
                </TabPanel>
            </Box>

        </Container>
    )
}

export default ProductDetail