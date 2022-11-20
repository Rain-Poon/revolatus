import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CATHAY_GREEN } from "../../styles/colors";

export default function ExperienceCard(props) {
    const {
        eventName,
        pointAmount
    } = { ...props }
    return (
        <Card elevation={20} sx={{ m: 2 }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ flex: 7, backgroundColor: CATHAY_GREEN, p:2 }}>
                    {eventName}
                </Box>
                <Box sx={{ flex: 3, p:2 }}>
                    <img src="./statuspoints.png" width="20px" height="20px"/> {pointAmount}
                    <Typography sx={{border: "1px solid black", borderRadius: "10px", p:1, mt:5}}>Redeem</Typography>
                </Box>
            </Box>
        </Card>
    );
}
