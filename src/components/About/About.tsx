import { Avatar, Box } from '@mui/material'

export function About() {
    return (
        <Box sx={{ height: '240px' }}>
            <img
                alt="Exemple of food"
                style={{ width: '100%', height: '100%' }}
                src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/394fda6b242f7f92d5994032dd52abb6/72b96263b7820864bba1eae7_rw_1920.gif?h=0765da6f74d1cf745336035a0d20698d"
            />

            <Avatar alt="Lucas Mateus" sx={{ width: 64, height: 64, margin: 'auto', position: 'relative', marginTop: '-35px' }} >LM</Avatar>
        </Box >
    )
}