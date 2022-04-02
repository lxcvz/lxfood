import { createContext, ReactNode, useContext, useState } from "react";

const ProductsContext = createContext({} as any)

interface ProductsProviderProps {
    children: ReactNode
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

export function ProductsContextProvider({ children }: ProductsProviderProps) {
    const [contextProducts, setContextProducts] = useState<any>([])
    console.log("🚀 ~ file: ProductsContext.tsx ~ line 16 ~ ProductsContextProvider ~ contextProducts", contextProducts)

    function handleAddProducts(product: any) {
        const updatedCart = [...contextProducts];
        const productExists = updatedCart.find(products => products.id === product.id)

        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1;

        if (productExists) {
            productExists.amount = amount;
        } else {
            const newProduct = {
                ...product,
                amount: 1
            }
            updatedCart.push(newProduct);
        }

        setContextProducts(updatedCart)
    }

    function handleRemoveProducts(productId: number) {
        const updatedCart = [...contextProducts];
        const indexProduct = updatedCart.findIndex(cartProduct => cartProduct.id === productId)

        if (indexProduct >= 0) {
            updatedCart.splice(indexProduct, 1);
            setContextProducts(updatedCart);
        }
    }

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        if (amount <= -1) {
            return;
        }

        const updatedCart = [...contextProducts];
        const productExists = updatedCart.find(product => product.id === productId);

        if (productExists) {
            productExists.amount = amount

            setContextProducts(updatedCart)

            if (productExists.amount === 0) {
                handleRemoveProducts(productExists.id)
            }
        } else {
            throw Error()
        }
    };

    return (
        <ProductsContext.Provider value={{
            handleAddProducts,
            contextProducts,
            updateProductAmount
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)