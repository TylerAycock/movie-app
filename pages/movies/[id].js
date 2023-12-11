import axios from 'axios'
require('dotenv').config()
import MovieDetails from '@/components/movies/MovieDetails'

export default function Movie({movie}) {

    return (
        <MovieDetails movie={movie}/>
    )
}

export async function getStaticProps(context) {
    let movieId = context.params.id

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    }

    let res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    const movie = res.data

    return {
        props: { movie }
    }
}

export async function getStaticPaths() {


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

    const res = await axios.get('https://api.themoviedb.org/3/movie/popular', { params, headers })

    const movies = res.data.results
    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        fallback: false,
        paths
    }
}