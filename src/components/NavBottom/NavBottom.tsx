import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Badge } from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from "react";
import { useProductsContext } from "../../contexts/ProductsContext";


export function NavBottom() {
    const [value, setValue] = useState('recents');
    const { contextProducts } = useProductsContext()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            centered
            onChange={handleChange}
            aria-label="icon tabs example"
            sx={{ width: '100%' }}
        >
            <Tab icon={<StorefrontIcon />} />
            <Tab icon={<Badge badgeContent={contextProducts.length} color="error">
                <LocalGroceryStoreIcon color="action" />
            </Badge>} />
        </Tabs>
    );
}