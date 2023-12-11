import MovieCard from './MovieCard'
import classes from './PopularMovie.module.css'

export default function PopularMovie({ movies }) {
    console.log(movies)
    return (
        <div className={classes.movie__container}>
            <h1>What's Popular?</h1>
            <div className={classes.movies}>
                {
                    movies.map(movie => {
                        return (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    })
                }

            </div>
        </div>
    )
}