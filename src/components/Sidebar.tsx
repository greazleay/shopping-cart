import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import ManSharpIcon from '@mui/icons-material/ManSharp';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useProductContext } from '@contexts/app.context'

const list = [
    {
        text: 'All Items',
        icon: <Inventory2OutlinedIcon fontSize='large' color='info' />
    },
    {
        text: 'Men\'s clothing',
        icon: <ManSharpIcon fontSize='large' color='info' />
    },
    {
        text: 'Women\'s clothing',
        icon: <WomanOutlinedIcon fontSize='large' color='info' />
    },
    {
        text: 'Jewelery',
        icon: <DiamondOutlinedIcon fontSize='large' color='info' />
    },
    {
        text: 'Electronics',
        icon: <TvRoundedIcon fontSize='large' color='info' />
    }
]

export const Sidebar = () => {

    const { handleFilter } = useProductContext()

    return (
        <List >
            {list.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemButton disableGutters onClick={(e) => handleFilter(e)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} disableTypography/>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}