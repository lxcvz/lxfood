import { Box, Typography } from '@mui/material';
import { BiTimeFive } from "react-icons/bi";
import { FaStoreAlt } from "react-icons/fa";

export function StoreInfo() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 14px'
        }}>
            <Typography sx={{ fontWeight: '600', color: '#2D2D2D', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                <FaStoreAlt style={{ color: '#49B955', fontSize: '24px', marginRight: '6px' }} /> Aberto
            </Typography>
            <Typography sx={{ fontWeight: '600', color: '#2D2D2D', display: 'flex', alignItems: 'center' }}>
                <BiTimeFive style={{ color: '#3083E2', fontSize: '24px', marginRight: '6px' }} /> 35 Min
            </Typography>
        </Box >
    );
}