import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavBars from "../../components/navbars";
import { CATHAY_GREEN } from "../../styles/colors";

export default function DonateMiles() {
    return (
        <NavBars>
            <Typography sx={{ textAlign: "center", fontSize: "50px" }}>10<img src="./miles.svg" width="50px" height="50px" />= $1</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "30px" }}>For every $1,</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "30px" }}>$0.3 will go to NGOs</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "30px" }}>$0.7 will go to our fund</Typography>
            <Box sx={{display: "flex", flexDirection:"column", m:2, p:3}}>
                <TextField label="Enter the Donation Amount"></TextField>
                <Button sx={{ backgroundColor: CATHAY_GREEN, color: "white", mt:2}}>
                    Donate
                </Button>
            </Box>
        </NavBars>
    );
}