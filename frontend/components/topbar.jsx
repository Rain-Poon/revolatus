import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { CATHAY_GREEN } from '../styles/colors';

export default function TopBar(){
    return (
        <AppBar sx={{p:2, backgroundColor: CATHAY_GREEN}}>
            <Typography sx={{textAlign: "center"}}>CATHAY+</Typography>
        </AppBar>
    );
}
