import { useEffect, useState } from "react"
import Image from "next/image"

export default function HomePage() {

  const [movieList, setMovieList] = useState([])


  const movieDB = ()=> {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmUzN2FlNDcyMjhhYmUzNDAzZjExYWYwYmE5OTg3ZCIsInN1YiI6IjY0YjU5NTE5MGU0ZmM4NTE5ZWJhYzE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ws2eeZk8ZWn7kWwvVIsRdBtZafDGXRXAG8VaDsLUwQI',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      setMovieList(data.results)
    })
      // .then(response => response.json())
      // .then(data => console.log(data.results))
      // .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    movieDB()
  }, [])

  return (
    <>
      Hello world!
      {movieList.map(movie => {
        let {backdrop_path, id, original_title, overview, poster_path, release_date, title} = movie
        return(
          <div className="movie">
            <h1>{title}</h1>
            {/* <Image src={poster_path} width={300} height={300}/> */}
            <img src={poster_path} alt="" />
          </div>
        )
      })}
    </>
  )
}
