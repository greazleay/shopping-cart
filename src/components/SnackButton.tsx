import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, Fragment, SyntheticEvent } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IProduct } from '@interfaces/productContext.interface';

interface ComponentProps {
    product: IProduct
    addItemToCart: (product: IProduct) => void
}

const SnackButton = ({ product, addItemToCart }: ComponentProps) => {

    const [openSnackBar, setOpenSnackbar] = useState(false);

    const handleClick = () => {
        setOpenSnackbar(true);
    };

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    const action = (
        <Fragment>
            <Button color='secondary' size='small' onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </Fragment>
    );

    return (
        <>
            <Button
                variant='contained'
                onClick={() => { handleClick(); addItemToCart(product) }}
                sx={{
                    background: 'linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))',
                    fontFamily: 'inherit',
                    fontWeight: '600'
                }}
                endIcon={<ShoppingCartOutlinedIcon />}
            >
                Add To Cart
            </Button>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleClose}
                message='Product Added To Cart'
                action={action}
            />
        </>
    )
}

export default SnackButton