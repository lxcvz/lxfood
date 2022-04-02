import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import styles from './About.module.scss'

export function About() {
    return (
        <Box sx={{ height: '240px' }} className={styles.about}>
            <img
                src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/394fda6b242f7f92d5994032dd52abb6/72b96263b7820864bba1eae7_rw_1920.gif?h=0765da6f74d1cf745336035a0d20698d"
            />

            <Avatar alt="Lucas Mateus" sx={{ width: 64, height: 64, margin: 'auto', position: 'relative', marginTop: '-35px' }} >LM</Avatar>
        </Box >
    )
}