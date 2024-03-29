import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import MovieDetails from './components/MovieDetails.jsx'
import Shows from './components/Shows.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/movies",
        element: <Movies/>,
      },
      {
        path: "/shows",
        element: <Shows/>
      },
      {
        path: "/movie/:movieId",
        element: <MovieDetails/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
