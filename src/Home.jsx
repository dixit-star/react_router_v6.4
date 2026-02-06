import { NavLink } from "react-router-dom"

export const Home=()=>{
    return(
        <>
       <div className="backhomeposteer">
        <h2 className="movidescription">Here are some English descriptions for a movie home page <br /> — pick the vibe you like:</h2>

        <NavLink to={"/service"}>
        <button>Show Now</button>
        </NavLink>
       </div>
        </>
    )
}