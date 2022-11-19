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
    "Recycling Store"
]

const _itemList = [
    {
        category: "Cosmetics",
        tradeQuantity: 1,
        milesQuantity: 10,
        brandName: "L' Oreal"
    }, {
        category: "Clothing",
        tradeQuantity: 1,
        milesQuantity: 10,
        brandName: "abc"
    }, {
        category: "Clothing",
        tradeQuantity: 1,
        milesQuantity: 120,
        brandName: "abc"
    }
]

export default function RecyclePage() {
    const [option, setOption] = useState("Cosmetics");
    const [itemList, setItemList] = useState(_itemList);


    // useEffect(() => {
    //     async function FetchRecycleData(option) {
    //         try {
    //             // const data = 
    //             //     await axios.get(
    //             //         "https://f6931828-82d6-4d69-8928-1e48b645c018.mock.pstmn.io" +
    //             //         "/recycle/getrecyclelist"
    //             //     )

    //             const data = await fetch("https://f6931828-82d6-4d69-8928-1e48b645c018.mock.pstmn.io/recycle/getrecyclelist")
    //             console.log(data)
    //             return data;
    //         } catch (error) {
    //             alert(error)
    //             return "";
    //         }
    //     }
    //     const data = FetchRecycleData();
    //     if (data != "") {
    //         setItemList(data);
    //     } else {
    //         setItemList([]);
    //     }

    // }, [option])
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
                    tradeQuantity={value.tradeQuantity}
                    milesQuantity={value.milesQuantity}
                    category={value.category}
                    brandName={value.brandName}
                />
            )}
        </NavBars>
    );
}
