import TopBar from "./topbar";
import BottomNavBar from "./navbar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function NavBars(props) {
    const { title, children } = { ...props };
    return (
        <>
            <TopBar />
            <Box sx={{ height: 50 }} />
            <Typography 
                sx={{ 
                    m: 2, 
                    p: 3, 
                    fontSize: 30, 
                    textAlign: "center", 
                    fontWeight: "bold" 
                }}>{title}</Typography>
            {children}
            <Box sx={{ height: 50 }} />
            <BottomNavBar />
        </>
    );
}
