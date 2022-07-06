import axios from 'axios';
import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { IProduct, ICartItem } from '@interfaces/productContext.interface';
import { listItemClasses } from '@mui/material';

export const useShopState = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('All Items')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    const [cartItems, setCartItems] = useState<ICartItem[]>([])

    const fetchItems = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setProducts(data);
        } catch (error) {
            console.error(error);
            setError(true)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    const filteredProducts = filter === 'All Items' ? products : products.filter(product => product.category.substring(1) === filter.substring(1))

    const itemsPerPage = 4;
    const offset = (currentPage - 1) * itemsPerPage;
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handlePaginate = (e: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleFilter = (e: any) => {
        const { textContent } = e.target;
        setFilter(textContent as string);
        setAnchorEl(null);
    }

    const addItemToCart = (product: IProduct) => {

        const updatedCartItems = cartItems.some(item => item.id === product.id)
            ? cartItems.map(item => {
                return item.id === product.id
                    ? { ...item, count: item.count + 1 }
                    : item
            })
            : [...cartItems, { ...product, count: 1 }]
        setCartItems(updatedCartItems);
    };

    const removeItemFromCart = (itemId: number): void => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems)
    }

    const increaseItemCount = (id: number) => {
        const updatedCartItems = cartItems.map(item => {
            return {
                ...item, count: item.id === id ? item['count'] + 1 : item['count']
            }
        });
        setCartItems(updatedCartItems);
    }

    const decreaseItemCount = (id: number) => {
        const updatedCartItems = cartItems.map(item => {
            return {
                ...item, count: item.id === id && item.count > 1 ? item['count'] - 1 : item['count']
            }
        });
        setCartItems(updatedCartItems);
    }

    return {
        products,
        filteredProducts,
        loading,
        itemsPerPage,
        offset,
        pageCount,
        currentPage,
        anchorEl,
        openMenu,
        cartItems,
        handleClose,
        handleMouseOver,
        handlePaginate,
        handleFilter,
        addItemToCart,
        removeItemFromCart,
        increaseItemCount,
        decreaseItemCount
    };
}
