import Hero from "@/components/Hero"
import PopularMovie from "@/components/movies/PopularMovie"
import axios from "axios"


export default function HomePage({ movies }) {

  return (
    <>
      <Hero />
      <PopularMovie movies={movies} />
    </>
  )
}

export async function getStaticProps() {

  require('dotenv').config()

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

  let res = await axios.get('https://api.themoviedb.org/3/movie/popular', { params, headers })
  const movies = res.data.results

  return {
    props: { movies }
  }
}
