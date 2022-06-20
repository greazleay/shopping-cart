import axios from 'axios';
import { useState, useEffect } from 'react';

export const useShopState = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return { products, loading };
}