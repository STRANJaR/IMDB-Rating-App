import React from 'react'
import axios from 'axios';


function Home() {
    const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/movies',
    
        headers: {
        'X-RapidAPI-Key': import.meta.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.RAPIDAPI_HOST 
      },
    
      }
    
      try {
        const data = axios.request(options)
        .then((res)=>{
          console.log(res.data);
        })
      } catch (error) {
        console.log(error);
      }
  return (
    <div>Home</div>
  )
}

export default Home