import classes from './MovieDetails.module.css'
import Image from 'next/image'

export default function MovieDetails({ movie }) {
    const { id, poster_path, homepage, popularity, tagline, title, vote_average, vote_count } = movie
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div className={classes.movie__details__container} id={id}>
            <Image src={imageUrl} alt={title} width={600} height={700} />
            <h1>{title}</h1>
        </div>
    )
}