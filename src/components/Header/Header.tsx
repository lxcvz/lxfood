import { Toolbar, Typography } from '@mui/material';
import { HeaderMenuList } from './HeaderMenuList';

export function Header() {
    return (
        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic', color: '#2D2D2D' }}>
                LM.<span style={{ fontWeight: 'bold', color: '#FB0909' }}>food</span>
            </Typography>

            <HeaderMenuList />
        </ Toolbar>
    )
}