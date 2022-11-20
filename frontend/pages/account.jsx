import { Avatar, Button, CircularProgress, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import NavBars from "../components/navbars";
import { GOLD } from "../styles/colors";
import SpaIcon from '@mui/icons-material/Spa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { USER_INFO_ROUTE } from "../consts/routes.const";
import { useState } from "react";
import axios from "axios";

const Account = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({})

    const fetchData = async () => {
        const token = localStorage.getItem('token') || "";
        const _id = localStorage.getItem('_id') || "";
        try {
            console.log(USER_INFO_ROUTE + _id)
            const data = await axios({
                method: "GET",
                url: USER_INFO_ROUTE + _id,
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(data.data)
            if (data.data != "") {
                setUserInfo(data.data);
            } else {
                setUserInfo({});
            }
        } catch (error) {

            if (error.response.status === 403) router.push("/login")
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (<NavBars>{
        (userInfo != {}) &&
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", m: 3, p: 2 }}>
            <Avatar sx={{ width: 100, height: 100, m: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>{userInfo.name}</Typography>
            <Typography variant="h6" sx={{ fontWeight: "light" }}>Gold member</Typography>
            <Typography variant="body1" sx={{ fontWeight: "light" }}>Expire on 02/03/2023</Typography>
            <Box sx={{ borderTop: `2px solid ${GOLD}`, width: "100%", m: 2 }}>&nbsp;</Box>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <Box sx={{ flex: 1, justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <Box><img src="./miles.svg" width="50px" height="50px"/></Box>
                        <Typography>Miles</Typography>
                    </Box>
                    <Typography sx={{ flex: 1 }}>{userInfo.miles}</Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: GOLD, height: 30 }} />
                <Box sx={{ flex: 1, justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <Box><img src="./statuspoints.png" width="50px" height="50px"/></Box>
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
    }
    </NavBars>);
}

export default Account;
