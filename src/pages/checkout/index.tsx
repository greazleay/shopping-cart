import type { NextPage } from 'next'
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

const Checkout: NextPage = () => {

    const { cartItems, increaseItemCount, decreaseItemCount, } = useProductContext();

    const cartItemList = cartItems.map((item, index) => {
        return (
            <Paper key={index} sx={{ display: 'flex', flexFlow: 'column wrap', padding: 1 }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Image src={item.image} alt={item.title} width={70} height={100} />
                    </Box>
                    <Box>
                        <Typography variant='subtitle1'>{item.title}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='subtitle1'>
                            Total Item Price: {item.count * item.price}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outlined' startIcon={<DeleteOutlineRoundedIcon />}>
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

            <Stack sx={{ width: '60%' }} spacing={2}>
                {cartItemList}
            </Stack>
        </Container>
    )
}

export default Checkout