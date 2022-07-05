import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { IProduct } from '@interfaces/productContext.interface'

interface ComponentProps {
    product: IProduct
}

const RatingCard = ({ product }: ComponentProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name='read-only' value={product.rating.rate} precision={0.1} readOnly size='small' />
            <Typography variant='body1' component={'span'} ml={1}>{product.rating.rate}</Typography>
            <Typography variant='body1' component={'span'} ml={1}>({product.rating.count} reviews)</Typography>
        </Box>
    )
}

export default RatingCard