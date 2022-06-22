import { ChangeEvent, MouseEvent } from 'react';

export interface IProduct {
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
    filteredProducts: IProduct[];
    loading: boolean;
    filter: string;
    itemsPerPage: number;
    offset: number;
    pageCount: number;
    currentPage: number;
    openMenu: boolean;
    anchorEl: null | HTMLElement;
    handleClose: () => void;
    handleMouseOver: () => void;
    handlePaginate: (e: ChangeEvent<unknown>, page: number) => void
    handleFilter: (e: MouseEvent<HTMLLIElement | HTMLDivElement>) => void
}