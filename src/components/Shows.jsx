import axios from 'axios';
import  { useEffect, useState } from 'react'
import { RiExternalLinkLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



function Shows() {
    const [shows, setShows] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/shows',
        headers: {
            'X-RapidAPI-Key': 'c2d4af3ce4mshd3561860489b6c5p10c016jsn84add2f23123',
            'X-RapidAPI-Host': import.meta.env.RAPIDAPI_HOST
        }
    };
    
    const getShows = () => {
        axios.request(options)
        .then((response)=> {
            console.log(response.data.movies)
            setShows(response.data.movies)
        })
        .catch((err)=> console.log(err))
    };

    useEffect(()=> {
        getShows()
    }, [])

  return (
    <section className="bg-black text-white w-auto h-auto">
        <div className="flex flex-wrap">

    {shows.map((show)=> (
        
        <div key={show._id} className="bg-[#1A1A1A] m-3 pb-3 w-48 rounded-sm flex flex-col justify-between">
            <div className="">
                <img src={show.poster_path} alt="" width="200px"/>

            </div>
            <div className="p-2">
                <RiStarSFill
                className="text-2xl text-yellow-400 mb-3"
                />
                <h1
                className="text-1xl"
                >{show.title}</h1>
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

export default Shows