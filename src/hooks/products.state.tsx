import axios from 'axios';
import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { IProduct, ICartItem } from '@interfaces/productContext.interface';

export const useShopState = () => {
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
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

    const handleFilter = (e: ChangeEvent<HTMLAnchorElement>) => {
        const { textContent } = e.target;
        setFilter(textContent as string);
        setAnchorEl(null);
    }

    return { products, filteredProducts, loading, itemsPerPage, offset, pageCount, currentPage, anchorEl, openMenu, handleClose, handleMouseOver, handlePaginate, handleFilter, cartItems };
}

