import axios from 'axios';
import { useState, useEffect, ChangeEvent } from 'react';

export const useShopState = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('All Items')

    const itemsPerPage = 4;
    const offset = (currentPage - 1) * itemsPerPage;
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePaginate = (e: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleFilter = (e: ChangeEvent<HTMLLIElement>) => {
        const { textContent } = e.target;
        setFilter(textContent as string);
    }

    const fetchItems = async () => {
        try {
            setLoading(true);
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

    return { products, loading, filter, itemsPerPage, offset, pageCount, currentPage, handlePaginate, handleFilter };
}

