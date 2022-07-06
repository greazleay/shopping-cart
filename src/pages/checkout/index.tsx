import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import { useProductContext } from '@contexts/app.context';
import Paper from '@mui/material/Paper';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CountButtons from '@components/CountButtons';
import RatingCard from '@components/RatingCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Divider from '@mui/material/Divider'
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';

const Checkout: NextPage = () => {

    const { push } = useRouter();

    const { cartItems, increaseItemCount, decreaseItemCount, removeItemFromCart } = useProductContext();

    const cartItemList = cartItems.map((item, index) => {
        return (
            <Paper
                key={index}
                elevation={3}
                sx={{
                    color: 'inherit',
                    background: 'inherit',
                    border: 1,
                    borderRadius: 3,
                    borderColor: '#BDD1B2',
                    p: 1,
                    ':hover': {
                        boxShadow: `-4px 4px 4px 0px #e0efd2, 
                            -4px -3px 4px 0px #e0efd2,
                            3px 4px 4px 0px #96979b,
                            3px -4px 4px 0px #8babf4 `
                    }
                }}
            >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Image src={item.image} alt={item.title} width={70} height={100} />
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Typography variant='subtitle1'>{item.title}</Typography>
                        <Typography variant='subtitle2'>Unit Price: {item.price}</Typography>
                        <RatingCard rating={item.rating} />
                    </Box>
                    <Box>
                        <Typography variant='subtitle1'>
                            Total Item Price: ${(item.count * item.price).toFixed(2)}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outlined' color='primary' startIcon={<DeleteOutlineRoundedIcon />} onClick={() => removeItemFromCart(item.id)}>
                        Remove
                    </Button>

                    <CountButtons
                        itemCount={item.count}
                        productId={item.id}
                        decreaseItemCount={decreaseItemCount}
                        increaseItemCount={increaseItemCount}
                    />
                </Box>
            </Paper>
        )
    })

    return (
        <Container
            maxWidth='xl'
            component={'main'}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'start',
                pt: { xs: 1, sm: 10, md: 15 },
                minHeight: '100vh',
                width: '100%',
            }}
        >

            <Head>
                <title>Shopping Cart | Checkout</title>
                <meta name='description' content='checkout' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box sx={{ position: 'relative', top: 1 }}>
                <Button
                    variant='contained'
                    onClick={() => push(`/shop`)}
                    startIcon={<ArrowBackIosRoundedIcon />}
                >
                    Continue Shopping
                </Button>
            </Box>

            {cartItems.length === 0 &&
                <Box sx={{ position: 'relative', top: { xs: 15, md: 400 }, left: { xs: -10, md: -300 } }}>
                    <Typography
                        variant='h4'
                        sx={{ fontWeight: 'bold' }}
                    >
                        Your Shopping Cart is Empty
                    </Typography>
                </Box>
            }

            {cartItems.length > 0 &&

                <>
                    <Stack sx={{ width: { xs: '100%', md: '60%' }, pb: { xs: 2 } }} spacing={2}>
                        <Typography variant='h5'>
                            Cart Items ({cartItems.length})
                        </Typography>
                        {cartItemList}
                    </Stack>

                    <Stack spacing={2} divider={<Divider flexItem />}>
                        <Typography variant='h4' component={'h1'} sx={{ fontWeight: 'bold' }}>
                            Order Summary
                        </Typography>
                        <Typography variant='h6' >
                            Total Quantity: {cartItems.reduce((a, b) => a + b.count, 0)}
                        </Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
                            Total Price: ${cartItems.reduce((a, b) => a + (b.count * b.price), 0).toFixed(2)}
                        </Typography>
                        <Button
                            startIcon={<PointOfSaleRoundedIcon />}
                            variant='contained'
                            color='success'
                            onClick={() => alert("Order Received!!! Thank you for your patronage")}
                        >
                            Checkout
                        </Button>
                    </Stack>
                </>
            }

        </Container>
    )
}

export default Checkout