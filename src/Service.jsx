import { useLoaderData } from "react-router-dom"

export const Service=()=>{
    const moviData = useLoaderData()
    console.log(moviData);
    
    return(
        <>
        <div className="containalldata" >
            <ul className="mainCardContiner">
          {(moviData.Search).map((curr,index)=>(
       
           <Card key={index} curr={curr}/>
            
          )  )}
            </ul>
        </div>
        </>
    )
}
export const Card=({curr})=>{
    const handlePlay=()=>{
//   console.log(curr.imdbID);
   window.open(`https://www.imdb.com/title/${curr.imdbID}/`)
    }
 return(

 <>       <div  >
           <li className="card"  >
                <div><img src={curr.Poster} alt="" /></div>
                <p>{curr.Title} </p>
                <button onClick={handlePlay}>Watch Now</button>
                 
            </li>
            </div>
 </>
 
)
}