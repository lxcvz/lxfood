import { Box } from '@mui/material'
import { About } from '../components/About/About'
import { Header } from '../components/Header/Header'
import { NavBottom } from '../components/NavBottom/NavBottom'
import { Categoires } from '../components/ProductsList/Categories'
import { StoreInfo } from '../components/StoreInfo/StoreInfo'

export function Home() {
    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            maxWidth: '100vw',
            width: '100vw',
            height: '100vh',
            margin: 'auto'
        }}>
            <Header />
            <About />
            <StoreInfo />
            <Categoires />
            <NavBottom />
        </Box>
    )
}
