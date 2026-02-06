export const getMovieDetaildata=  async({params})=>{
    const id=params.movieID
    // console.log(params.movieID);
    
    const api_url = `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    const response = await fetch(api_url)
    const data = await response.json()
    // console.log(data);
    
   return data;
}