import { Badge, BottomNavigation, BottomNavigationAction } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useProductsContext } from "../../contexts/ProductsContext";

export function NavBottom() {
    const [value, setValue] = useState('recents');
    const { contextProducts } = useProductsContext()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} centered onChange={handleChange} aria-label="icon tabs example" sx={{ width: '100%' }}>
            <Tab icon={<StorefrontIcon />} />
            <Tab icon={<Badge badgeContent={contextProducts.length} color="primary">
                <LocalGroceryStoreIcon color="action" />
            </Badge>} />
        </Tabs>
    );
}