export async function fetchData() {
    // const apiKey = "e17e3e8e"
    const api_url = `https://www.omdbapi.com/?s=batman&page=1&apikey=${import.meta.env.VITE_API_KEY}`
    const response = await fetch(api_url)
    const data = await response.json()
   return data;
    
}
