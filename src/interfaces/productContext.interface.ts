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

export interface ICartItem extends IProduct {
    count: number
}

export interface IProductContext {
    products: IProduct[];
    filteredProducts: IProduct[];
    cartItems: ICartItem[];
    loading: boolean;
    itemsPerPage: number;
    offset: number;
    pageCount: number;
    currentPage: number;
    openMenu: boolean;
    anchorEl: null | HTMLElement;
    handleClose: () => void;
    handleMouseOver: (e: MouseEvent<HTMLElement>) => void;
    handlePaginate: (e: ChangeEvent<unknown>, page: number) => void;
    handleFilter: (e: MouseEvent<HTMLLIElement | HTMLDivElement> | any) => void;
    addItemToCart: (product: IProduct) => void
    increaseItemCount: (id: number) => void
    decreaseItemCount: (id: number) => void
}