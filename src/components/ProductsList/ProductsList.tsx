import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { AccordionDetails, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useProductsContext } from "../../contexts/ProductsContext";

interface CartItemsAmount {
    [key: number]: number;
}

type ProductProps = {
    product: {
        id: number;
        categoria: string;
        url_imagem: string;
        descricao: string;
        valor_venda: number;
    }
}

export function ProductsList({ product }: ProductProps) {
    const { contextProducts, handleAddProducts, updateProductAmount } = useProductsContext()

    const cartItemsAmount = contextProducts.reduce((sumAmount: any, product: any): number => {
        sumAmount[product.id] = product.amount;
        return sumAmount;
    }, {} as CartItemsAmount)

    function handleProductDecrement(product: any) {
        updateProductAmount({ productId: product.id, amount: cartItemsAmount[product.id] - 1 })
    }

    return (
        <div>
            <AccordionDetails sx={{ borderTop: '1px solid white' }} key={product.id}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img
                            src={product.url_imagem}
                            alt={product.descricao}
                            style={{ objectFit: 'cover', width: '54px', height: '54px', marginRight: '8px' }}
                        />

                        <Box sx={{ fontSize: '12px' }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#606060', textAlign: 'left', fontSize: '14px' }}>
                                {product.descricao}
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: '#606060', fontSize: '14px' }}>
                                {new Intl.NumberFormat('pt-BR',
                                    { style: 'currency', currency: 'BRL' }
                                ).format(product.valor_venda)}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AddCircleIcon sx={{ color: '#49B955' }} onClick={() => handleAddProducts(product)} />
                        <Typography sx={{ padding: '0 6px' }}>{cartItemsAmount[product.id] || 0}</Typography>
                        <RemoveCircleIcon sx={{ color: '#FB0909' }} onClick={() => handleProductDecrement(product)} />
                    </Box>
                </Box>
            </AccordionDetails>
        </div>
    )
}