import classes from './MovieCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ movie }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const formattedDate = new Date(movie.release_date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const movieUrl = `movies/${movie.id}`
    
    return (
        <Link href={movieUrl}>
            <div className={classes.card}>
                <Image src={imageUrl} alt={movie.title} width={400} height={300} className={classes.image} />
                <div className={classes.description}>
                    <h2>{movie.title}</h2>
                    <p>{formattedDate}</p>
                </div>
            </div>
        </Link>
    )
}