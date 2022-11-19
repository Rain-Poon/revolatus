import { useEffect } from "react";
import { useState } from "react";

export default function ProtectedRoute({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const getLoginStatus = async () => {
        const token = localStorage.getItem('token');
        
    }

    useEffect(() => {

    }, [])

    if (!loading){
        if (localStorage.getItem('token'))
        return ();
    } else {
        return (<>Loading...</>)
    }
}