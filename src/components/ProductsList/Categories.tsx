import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { ProductsList } from './ProductsList';

interface Product {
    id: number;
    categoria: string;
    url_imagem: string;
    descricao: string;
    valor_venda: number;
    categoria_id: number;
}

interface Category {
    id: string | number;
    descricao: string;
    detalhes: string;
}

export function Categoires() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [categoriesList, setCategoriesList] = useState<Category[]>([])
    const [products, setProducts] = useState<Product[]>([])

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

    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    const handleChange = (panel: any) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {categoriesList && categoriesList.map((category): any => (
                <Accordion
                    key={category.id}
                    expanded={expanded === category.id}
                    onChange={handleChange(category.id)}
                    sx={{ background: '#FAFAFA', color: '#2D2D2D' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'red' }} />}
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
                        <ProductsList product={filteredProduct} />
                    ))}
                </Accordion>
            ))}
        </>
    );
}