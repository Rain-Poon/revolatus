import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { CATHAY_GREEN } from '../styles/colors';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

export default function BottomNavBar() {
    const router = useRouter();
    const routes = [
        "/transportation",
        "/recycle",
        "/card",
        "/account"
    ]

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: 20 }}
                showLabels
                value={routes.findIndex((route) => router.pathname.includes(route))}
            >

                <BottomNavigationAction label="Transportation" icon={<DirectionsBusIcon />} onClick={(e) => { e.preventDefault(); router.push("/transportation") }} />
                <BottomNavigationAction label="Recycle" icon={<RestoreIcon />} onClick={(e) => { e.preventDefault(); router.push("/recycle") }} />
                <BottomNavigationAction label="My Card" icon={<PaymentIcon />} onClick={(e) => { e.preventDefault(); router.push("/card") }} />
                <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} onClick={(e) => { e.preventDefault(); router.push("/account") }} />
            </BottomNavigation>
        </Box>
    );
}
