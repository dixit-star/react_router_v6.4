import { Outlet ,useNavigation} from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout=()=>{
    const navigation = useNavigation();
    // Returns the current Navigation, defaulting to an "idle" navigation when no navigation is in progress. You can use this to render pending UI (like a global spinner) or read FormData from a form navigation.
    // console.log(navigation.state==="loading");
    
    if(navigation.state==="loading"){
        console.log("loading");
        
      return  <h1>loding...</h1>
    }else{
    return(
        <>
        <Header/>
        {/* access the clildren  components */}
        <Outlet/>
        <Footer/>
        
        </>
    )
}
}               