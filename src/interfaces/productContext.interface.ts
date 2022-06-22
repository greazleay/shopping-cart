import { ChangeEvent } from 'react';

interface IProduct {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
    title: string;
}

export interface IProductContext {
    products: IProduct[];
    loading: boolean;
    filter: string;
    itemsPerPage: number;
    offset: number;
    pageCount: number;
    currentPage: number;
    handlePaginate: (e: ChangeEvent<unknown>, page: number) => void
    handleFilter: (e: ChangeEvent<HTMLLIElement>) => void
}