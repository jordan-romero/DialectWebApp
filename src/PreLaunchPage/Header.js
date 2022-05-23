import React from 'react'
import { Box, Typography } from '@mui/material';
import banner from '../assets/prelaunchBanner.png'
import { theme } from '../Theme/theme';

const Header = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: 300,
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      [theme.breakpoints.not('desktop' || 'desktopXl')]: {
        width: '90vw',
      },
    }} >
      <Typography variant='h1' color="primary">Dialect Class</Typography>
    </Box >
  )
}

export default Header