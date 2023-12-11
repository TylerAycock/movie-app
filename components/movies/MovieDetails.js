import { formToJSON } from 'axios'
import classes from './MovieDetails.module.css'
import Image from 'next/image'
import Meta from '../meta'

export default function MovieDetails({ movie }) {
    console.log(movie)
    const { backdrop_path, id, poster_path, homepage, popularity, tagline, title, vote_average, vote_count, overview, genres, release_date } = movie
    const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`
    const formattedDate = new Date(release_date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return (
        <div className={classes.movie__details__container} id={id}>
            <Meta title={title}/>
            <Image src={imageUrl} alt={title} width={1000} height={600} />
            <h1>{title}</h1>
            <p>{overview}</p>
            <p> Genres:
                <span>{genres.map(genre => genre.name)}</span>
            </p>
            <p>
                Release Date: <span>{formattedDate}</span>
            </p>
        </div>
    )
}