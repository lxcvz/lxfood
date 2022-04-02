import { Box, Container } from '@mui/material'
import { About } from '../About/About'
import { Categoires } from '../Categories/Categories'
import { Header } from '../Header/Header'
import { NavBottom } from '../NavBottom/NavBottom'
import { StoreInfo } from '../StoreInfo/StoreInfo'
import styles from './Home.module.scss'


export function Home() {
    return (
        <Box sx={{ backgroundColor: '#FFFFFF', maxWidth: '100vw', width: '100vw', height: '100vh', margin: 'auto' }}>
            <Header />
            <About />
            <StoreInfo />
            <Categoires />
            <NavBottom />
        </Box>
    )
}


{/* <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        /> */}