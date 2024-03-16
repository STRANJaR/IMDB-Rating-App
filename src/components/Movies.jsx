import axios from "axios"
import { useState } from "react";
import { RiStarSFill } from "react-icons/ri";


function Movies() {
    const [movies, setMovies] = useState([])
    const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/movies',
        headers: {
            'X-RapidAPI-Key': 'c2d4af3ce4mshd3561860489b6c5p10c016jsn84add2f23123',
            'X-RapidAPI-Host': import.meta.env.RAPIDAPI_HOST
        }
    };

    const getData =  async() => {
        await axios.request(options)
        .then((res)=>{
            console.log(res.data.movies);
            setMovies(res.data.movies);
        })
    }

    useState(()=>{
        getData()
    },[])
  return (
    <section className="w-auto h-screen">
        <div className="flex flex-wrap">

    {movies.map((movie)=> (
        <div key={movie._id} className="bg-green-300 m-3 w-48">
            <div className="">
                <img src={movie.poster_path} alt="" width="200px"/>

            </div>
            <div className="p-2">
                <RiStarSFill
                className="text-2xl text-yellow-400 mb-3"
                />
                <h1
                className="text-1xl"
                >{movie.title}</h1>
            </div>
        </div>
    ))}
        </div>

    </section>
  )
}

export default Movies