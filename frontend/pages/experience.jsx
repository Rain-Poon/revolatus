import { Card, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ExperienceCard from "../components/experience/experiencecard";
import NavBars from "../components/navbars";
import { CATHAY_GREEN, GOLD } from "../styles/colors";

const experienceList = []

export default function CathayCard() {
    return (
        <NavBars title="Redeem with your Status Point">
            {/* <Box sx={{display: "flex", justifyContent: "center"}}>
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
            </Box> */}
            <Box sx={{m:2, p:3}}>
                <Box sx={{ borderTop: `2px solid ${GOLD}`, width: "90%", m: 2 }}>&nbsp;</Box>
                <Typography>Tracy said she will be giving me this description so I just say Lorem Ipsum first.</Typography>
                <Box sx={{ borderBottom: `2px solid ${GOLD}`, width: "90%", m: 2 }}>&nbsp;</Box>
            </Box>
            <ExperienceCard
                eventName="HK Wine Festival"
                pointAmount={20}
            />
        </NavBars>
    );
}
