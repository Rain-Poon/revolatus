import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import NavBars from "../../components/navbars";
import RecycleCard from "../../components/recycle/recyclecard";
import { CATHAY_GREEN, GOLD } from "../../styles/colors";
import axios from "axios";
import { RECYCLE_GET_RECYCLE_LIST } from "../../consts/routes.const";

const categoryList = [
    "Cosmetics",
    "Clothing",
    "Recycling-Store"
]

export default function RecyclePage() {
    const [option, setOption] = useState("Cosmetics");
    const [itemList, setItemList] = useState([]);

    const TracyKong = async () => {
        const data = await axios.get(RECYCLE_GET_RECYCLE_LIST + option)
        if (data.data != "") {
            setItemList(data.data);
        } else {
            setItemList([]);
        }
    }

    useEffect(() => {
        TracyKong();
    }, [option]);

    return (
        <NavBars title="Recycling">
            <Box sx={{ m: 3, p: 2, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {!!(categoryList.length > 0) &&
                    categoryList.map((value, index) => {
                        return (
                            <Button
                                key={index}
                                sx={{
                                    border: `2px solid ${CATHAY_GREEN}`,
                                    color: CATHAY_GREEN,
                                    m: 2
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOption(value)
                                }}
                            >
                                {value}
                            </Button>
                        );
                    })
                }
            </Box>

            {!!(itemList.length > 0) && itemList.map((value, index) =>
                <RecycleCard
                    key={index}
                    tradeQuantity={value.tradeQuantity}
                    milesQuantity={value.milesQuantity}
                    category={value.category}
                    brandName={value.brandName}
                />
            )}
        </NavBars>
    );
}
