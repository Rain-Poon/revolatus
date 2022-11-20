import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { USER_LOGIN_ROUTE } from "../consts/routes.const";

export default function LoginPage() {
    const [membershipID, setMembershipID] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function handleLogin(e){
        e.preventDefault();
        const response = await axios.post(USER_LOGIN_ROUTE, {
            membershipID: membershipID,
            password: password
        })
        if (response.status === 200){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('_id', response.data._id);
            alert("Login success!")
            router.push("/account")
            
        } else {
            alert("Login failed!")
        }
    }

    return (
        <>
            <Typography sx={{ textAlign: "center", fontSize: "50px", mt: 10, fontWeight: "bold" }}>CATHAY+</Typography>
            <Box sx={{m:2, p:3, display: "flex", flexDirection: "column"}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Membership ID"
                    sx={{m:2}}
                    onChange={(e) => {setMembershipID(e.target.value)}}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    sx={{m:2}}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Button variant="outlined" onClick={handleLogin}>Login</Button>
                <Typography sx={{mt:5}}>For testing purposes only</Typography>
                <Typography>Membership ID: 9876543210</Typography>
                <Typography>Password: 123456</Typography>
            </Box>
        </>
    );
}