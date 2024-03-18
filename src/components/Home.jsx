import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])

  const options = {
    method: 'GET',
    url: 'https://moviesverse1.p.rapidapi.com/top-250-movies',
    headers: {
      'X-RapidAPI-Key': 'c2d4af3ce4mshd3561860489b6c5p10c016jsn84add2f23123',
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
    }
  };
  
    useEffect(()=>{

    try {
      axios.request(options)
      .then((res)=> {
        setData(res.data)
        console.log(res.data.movies);
        setTrendingMovies(res.data.movies)
      })
    } catch (error) {
      console.log(error);
    }
  })


  return (
    <div className='h-screen bg-slate-400'>
      {
        trendingMovies.map(item => (
          <div key={item.title}>
            {/* <h1>{}</h1> */}
            <div>
              <h1>{item.title}</h1>
            </div>

          </div>
          
        ))
      }
    </div>
  )
}

export default Home