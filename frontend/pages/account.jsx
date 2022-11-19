import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import NavBars from "../components/navbars";
import { GOLD } from "../styles/colors";

const Account =  () => {
    return (<NavBars>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", m:3, p:2}}>
            <Avatar sx={{ width: 100, height: 100 , m:2}}/>
            <Typography variant="h4" sx={{fontWeight:"bold"}}>John Chan</Typography>
            <Typography variant="h6" sx={{fontWeight:"light"}}>Gold member</Typography>
            <Typography variant="body1" sx={{fontWeight:"light"}}>Avios: 2000</Typography>
            <Box sx={{borderTop: `2px solid ${GOLD}`, width: "100%", m:2}}>&nbsp;</Box>
            <Typography>Go to</Typography>
            <Box display="flex" flexDirection={"row"}>
                <Typography sx={{m:2}}>
                    CATHAY APP 
                </Typography>
                <Typography sx={{m:2}}>
                    CATHAY PACIFIC APP 
                </Typography>
            </Box>
        </Box>
    </NavBars>);
}

export default Account;
