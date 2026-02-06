import { NavLink, useLoaderData, useParams } from "react-router-dom"
import { Card, Service } from "./Service";

export const MoviDetails=()=>{
    // const params=useParams()
    // /console.log(params.movieID);

    const moviData=useLoaderData()
    console.log(moviData);
    
  const handlePlay=()=>{
//   console.log(curr.imdbID);
   window.open(`https://www.imdb.com/title/${moviData.imdbID}/`)
    }
    return(
        <>
        
        <h1></h1>
        <div className="movidetailscontainer"  >
           <li className="card"  >
                <div><img src={moviData.Poster} alt="" /></div>
                <p>{moviData.Title} </p>
                {/* <NavLink to={`/service/${moviData.imdbID}`}> */}
                <button onClick={handlePlay}>Watch Now</button>
                {/* </NavLink> */}
                 
            </li>
            </div>
        </>
    )
}