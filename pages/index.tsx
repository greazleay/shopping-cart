import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Head from 'next/head'
import homeImage from '@public/img_home.jpg';
import Image from 'next/image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
  return (
    <Container maxWidth='xl' component={'main'} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh', flexWrap: 'wrap', width: '100%' }}>

      <Head>
        <title>Shopping Cart | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box width={'40%'}>
        <Typography variant='h3' sx={{ fontFamily: 'inherit', fontWeight: 'inherit' }} >
          Everything you are looking for in one place.
        </Typography>

        <Typography variant='subtitle2' component={'p'} sx={{ fontFamily: 'inherit', fontWeight: 'inherit', my: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
          volutpat commodo sed egestas egestas fringilla. Faucibus ornare
          suspendisse sed nisi lacus sed viverra tellus in. Faucibus nisl
          tincidunt eget nullam non nisi. Cursus mattis molestie a iaculis at
          erat.
        </Typography>

        <Button
          href='/shop'
          variant='contained'
          sx={{
            background: 'linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))',
          }}
          endIcon={<ShoppingBagIcon />}
        >
          Shop Items
        </Button>
      </Box>

      <Box width={'30%'}>
        <Image src={homeImage} alt='shopping cart' />
      </Box>

    </Container>
  )
}

export default Home
