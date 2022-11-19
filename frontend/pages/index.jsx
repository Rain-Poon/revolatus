import { useRouter } from "next/router";
import { useEffect } from "react";
import BottomNavBar from "../components/navbar";
import NavBars from "../components/navbars";
import TopBar from "../components/topbar";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/account")
  }, [])
  return (
    <>
      Welcome to CATAHY. You will be automatically redirected to the Account page. 
      If the page does not load automatically, please click
      &nbsp;<a onClick={() => {router.push("/account")} }>here</a>.
    </>
  )
}
