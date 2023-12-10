import Hero from "@/components/Hero"
import PopularMovie from "@/components/movies/PopularMovie"
import axios from "axios"


export default function HomePage({movies}) {
// console.log(movies[0])
  return (
    <>
      <Hero />
      <PopularMovie movies={movies}/>
    </>
  )
}

export async function getStaticProps() {
  require('dotenv').config()

  let movies =[]

  const params = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
  };

  const headers = {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    accept: 'application/json',
  };



  await axios.get('https://api.themoviedb.org/3/movie/popular', { params, headers })
    .then((response) => {
      // console.log(response.data.results[0])
      movies = response.data.results
    })
    .catch(err => {
      console.log(err)
    })

  return {
    props:{movies}

  }
}
