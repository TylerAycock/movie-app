import { getStaticPaths } from "next/dist/build/templates/pages"
import axios from "axios"

export default function Movie(props) {
    console.log(props.data)
    return (
        <h1>hello world!</h1>
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

export async function getStaticPaths(){

}