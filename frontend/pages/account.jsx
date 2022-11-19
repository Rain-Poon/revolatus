import { Avatar, Button, CircularProgress, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import NavBars from "../components/navbars";
import { GOLD } from "../styles/colors";
import SpaIcon from '@mui/icons-material/Spa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Account = () => {
    return (<NavBars>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", m: 3, p: 2 }}>
            <Avatar sx={{ width: 100, height: 100, m: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>John Chan</Typography>
            <Typography variant="h6" sx={{ fontWeight: "light" }}>Gold member</Typography>
            <Typography variant="body1" sx={{ fontWeight: "light" }}>Expire on 02/03/2023</Typography>
            <Box sx={{ borderTop: `2px solid ${GOLD}`, width: "100%", m: 2 }}>&nbsp;</Box>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <Box sx={{ flex: 1, justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <Box>A</Box>
                        <Typography>Miles</Typography>
                    </Box>
                    <Typography sx={{ flex: 1 }}>1000</Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: GOLD, height: 30 }} />
                <Box sx={{ flex: 1, justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <Box>S</Box>
                        <Typography>Status Points</Typography>
                    </Box>
                    <Typography sx={{ flex: 1 }}>1000</Typography>
                </Box>
            </Box>
            <Box sx={{ borderTop: `2px solid ${GOLD}`, width: "100%", m: 2 }}>&nbsp;</Box>
            <Button sx={{ display: "flex", alignItems: "center" }}>
                <SpaIcon sx={{ m: 1 }} />
                <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px", m: 1 }}>Donate Miles</Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ m: 1 }} />
            </Button>

        </Box>
    </NavBars>);
}

export default Account;
