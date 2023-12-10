import MovieCard from './MovieCard'
import classes from './PopularMovie.module.css'

export default function PopularMovie({ movies }) {
    return (
        <div className={classes.main__container}>
            <h1>What's Popular?</h1>
            <div>

            </div>
            {
                movies.map(movie => {
                    return (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                })
            }
        </div>
    )
}