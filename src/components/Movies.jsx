import axios from "axios"
import { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";


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
    <section className="bg-black text-white w-auto h-auto">
        <div className="flex flex-wrap">

    {movies.map((movie)=> (
        
        <div key={movie._id} className="bg-[#1A1A1A] m-3 pb-3 w-48 rounded-sm flex flex-col justify-between">
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

            <div className="p-2 flex justify-center ">
                <Link 
                className="bg-purple-700 items-center w-40   p-2 flex justify-center rounded-sm hover:bg-purple-600 transition-all">
                    View More <RiExternalLinkLine className="ml-2"/>
                </Link>
            </div>
        </div>
    ))}
        </div>

    </section>
  )
}

export default Movies