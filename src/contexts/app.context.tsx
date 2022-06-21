import { createContext, ReactNode, useContext } from 'react';
import { useShopState } from '@hooks/products';
import { IProductContext } from '@interfaces/product.context';

const ProductContext = createContext<IProductContext>(null!);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const products = useShopState();

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
};

export const useProductContext = () => useContext(ProductContext);