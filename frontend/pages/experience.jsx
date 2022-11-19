import { Card, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ExperienceCard from "../components/experience/experiencecard";
import NavBars from "../components/navbars";
import { REDEMPTION_GET_REDEMPTION_LIST } from "../consts/routes.const";
import { CATHAY_GREEN, GOLD } from "../styles/colors";

export default function CathayCard() {
    const [experienceList, setExperienceList] = useState([]);
    const router = useRouter();
    const fetchData = async () => {
        const token = localStorage.getItem('token') || "";
        try {
            const data = await axios({
                method: "GET",
                url: REDEMPTION_GET_REDEMPTION_LIST,
                headers: { Authorization: `Bearer ${token}` }
            })
            if (data.data != "") {
                setExperienceList(data.data);
            } else {
                setExperienceList([]);
            }
        } catch (error) {
            if (error.response.status === 403) router.push("/login")
            console.log(error)
        }
    }
    // const fetchData = async () => {
    //     const data = await axios.get(REDEMPTION_GET_REDEMPTION_LIST);
    //     if (data.data !== undefined) setExperienceList(data.data);

    // }
    useEffect(() => {
        fetchData();
    }, [])
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
            <Box sx={{ m: 2, p: 3 }}>
                <Box sx={{ borderTop: `2px solid ${GOLD}`, width: "90%", m: 2 }}>&nbsp;</Box>
                <Typography>Tracy said she will be giving me this description so I just say Lorem Ipsum first.</Typography>
                <Box sx={{ borderBottom: `2px solid ${GOLD}`, width: "90%", m: 2 }}>&nbsp;</Box>
            </Box>
            {!!(experienceList.length > 0) && experienceList.map((value, index) =>
                <ExperienceCard
                    eventName={value.title}
                    pointAmount={value.miles}
                />
            )
            }
        </NavBars>
    );
}
