import { Box, Card, Typography } from "@mui/material";
import { CATHAY_GREEN } from "../../styles/colors";

export default function RecycleCard(props) {
    const {
        tradeQuantity,
        milesQuantity,
        category,
        brandName
    } = { ... props };
    return (
        <Card elevation={20} sx={{ p:3, m:2, borderRadius: 5, backgroundColor: CATHAY_GREEN, color: "white"}}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "left", textAlign: "left" }}>{ tradeQuantity } for A{milesQuantity}</Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "right", textAlign: "right" }}>{category}</Typography>
                </Box>
            </Box>
            <Typography sx={{mt: 10, ml:"auto", mr:"auto", fontWeight:"bold", fontSize: 30}}>{brandName}</Typography>
        </Card>
    );
}
