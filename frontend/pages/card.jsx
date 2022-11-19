import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavBars from "../components/navbars";
import { CATHAY_GREEN } from "../styles/colors";

export default function CathayCard() {
    return (
        <NavBars>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Card elevation={20} sx={{
                    p: 2, m: 3,
                    borderRadius: "10px",
                    backgroundColor: CATHAY_GREEN,
                    width: 425,
                    height: 260,
                    color: "white"
                }}>
                    <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Cathay</Typography>
                    <Typography sx={{ p: 2, m: 2, textAlign: "end" }}>[00]</Typography>
                    <Typography sx={{ p: 2 }}>1010 1010 1010 1010</Typography>
                    <Typography sx={{ p: 2 }}>KONG CHEUCK SZE</Typography>
                </Card>
            </Box>
        </NavBars>
    );
}
