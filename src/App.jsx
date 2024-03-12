import './App.css'
import Home from './components/Home'
import axios from 'axios'
function App() {
  // const options = {
  //   method: 'GET',
  //   url: 'https://movies-api14.p.rapidapi.com/movies',

  //   headers: {
  //   'X-RapidAPI-Key': import.meta.env.RAPIDAPI_KEY,
  //   'X-RapidAPI-Host': import.meta.env.RAPIDAPI_HOST 
  // },

  // }

  try {
    const data = axios.get('http://www.omdbapi.com/?apikey=992c63c1')
    .then((res)=>{
      console.log(res.data);
    })
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <h1>Movie app</h1>
      {/* <Home/> */}
    </>
  )
}

export default App
