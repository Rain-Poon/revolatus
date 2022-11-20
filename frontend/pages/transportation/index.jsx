import { Avatar, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Carousel } from "react-bootstrap";
import NavBars from "../../components/navbars";

const outletList = [
    "MTR",
    "KMB",
    "Citybus"
]

export default function TransportationPage() {
    return (
        <NavBars title="Transportation">
            <Typography sx={{ ml: 2, pl: 3, fontSize: "30px", fontWeight: "bold" }}>Promotion</Typography>
            <Box sx={{ m: 2, p: 3 }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="2.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="3.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Box>
            <Typography sx={{ ml: 2, pl: 3, fontSize: "30px", fontWeight: "bold" }}>Available Outlet</Typography>
            <Stack direction="row" spacing={2} sx={{ p: 3, m: 2 }}>
                {!!(outletList.length > 0) && outletList.map((value, index) =>
                    <Box>
                        <Avatar alt={value} src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} />
                        <Typography sx={{ textAlign: "center", fontWeight: "bold", mt: 2, fontSize: 20 }}>{value}</Typography>
                    </Box>
                )
                }
            </Stack>
        </NavBars>
    );
}
