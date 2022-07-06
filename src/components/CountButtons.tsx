import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface ComponentProps {
    decreaseItemCount: (id: number) => void;
    increaseItemCount: (id: number) => void;
    productId: number;
    itemCount: number
}

const CountButtons = ({ decreaseItemCount, increaseItemCount, productId, itemCount }: ComponentProps) => {
    return (
        <ButtonGroup variant='contained' aria-label='outlined primary button group' color='secondary'>
            <Button onClick={() => decreaseItemCount(productId)}>
                <RemoveCircleIcon />
            </Button>
            <Button>{itemCount}</Button>
            <Button onClick={() => increaseItemCount(productId)}>
                <AddCircleIcon />
            </Button>
        </ButtonGroup>
    )
}

export default CountButtons