import { Accordion, AccordionDetails, AccordionSummary, Button, Icon, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { api } from '../../services/api'
import { Box } from "@mui/system";
import _ from 'lodash'
import { useProductsContext } from "../../contexts/ProductsContext";

interface CartItemsAmount {
    [key: number]: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export function Categoires() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [categoriesList, setCategoriesList] = useState<any[]>([])
    const [products, setProducts] = useState<any[]>([])

    const { contextProducts, handleAddProducts, handleRemoveProducts, updateProductAmount } = useProductsContext()

    const cartItemsAmount = contextProducts.reduce((sumAmount: any, product: any): number => {
        sumAmount[product.id] = product.amount;
        return sumAmount;
    }, {} as CartItemsAmount)

    async function getCategories() {
        try {
            const { data } = await api.get('categorias_app/?format=json');
            setCategoriesList(data.results)
            console.log("🚀 ~ file: Categories.tsx ~ line 39 ~ getCategories ~ data.results", data.results)
        } catch (err: Error | any) {
            return { success: false, message: err.message, stack: err.stack }
        }
    }

    async function getProducts() {
        try {
            const { data } = await api.get('produtos_app/?format=json');
            setProducts(data.results)
            console.log("🚀 ~ file: Categories.tsx ~ line 48 ~ getProducts ~ data.results", data.results)
        } catch (err: Error | any) {
            return { success: false, message: err.message, stack: err.stack }
        }
    }

    function handleProductDecrement(product: any) {
        updateProductAmount({ productId: product.id, amount: cartItemsAmount[product.id] - 1 })
    }

    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {categoriesList && categoriesList.map((category): any => (
                <Accordion key={category.id} expanded={expanded === category.id} onChange={handleChange(category.id)} sx={{ background: '#FAFAFA', color: '#2D2D2D' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Box sx={{ width: '100%' }}>
                            <Typography sx={{ width: '50%', flexShrink: 0, fontWeight: 'bold', color: '#292929' }}>
                                {category.descricao}
                            </Typography>
                            <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold', color: '#5F5F5F', fontSize: '12px' }}>
                                {category.detalhes}
                            </Typography>

                        </Box>
                    </AccordionSummary>
                    {products && products.filter(product => product.categoria_id === category.id).map(filteredProduct => (
                        <AccordionDetails sx={{ borderTop: '1px solid white' }} key={filteredProduct.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <img src={filteredProduct.url_imagem} style={{ objectFit: 'cover', width: '54px', height: '54px', marginRight: '8px' }} />

                                    <Box sx={{ fontSize: '12px' }}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#606060', textAlign: 'left', fontSize: '14px' }}>
                                            {filteredProduct.descricao}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'bold', color: '#606060', fontSize: '14px' }}>
                                            {new Intl.NumberFormat('pt-BR',
                                                { style: 'currency', currency: 'BRL' }
                                            ).format(filteredProduct.valor_venda)}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <AddCircleIcon sx={{ color: '#49B955' }} onClick={() => handleAddProducts(filteredProduct)} />
                                    <Typography sx={{ padding: '0 6px' }}>{cartItemsAmount[filteredProduct.id] || 0}</Typography>
                                    <RemoveCircleIcon sx={{ color: '#FB0909' }} onClick={() => handleProductDecrement(filteredProduct)} />
                                </Box>
                            </Box>
                        </AccordionDetails>
                    ))}
                </Accordion>
            ))
            }
        </div >
    );
}