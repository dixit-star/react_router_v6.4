import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout=()=>{
    return(
        <>
        <Header/>
        {/* access the clildren  components */}
        <Outlet/>
        <Footer/>
        
        </>
    )
}               