import { createContext, ReactNode, useContext } from 'react';
import { useShopState } from '@src/hooks/products.state';
import { IProductContext } from '@interfaces/productContext.interface';

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