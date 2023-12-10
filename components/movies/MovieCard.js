import classes from './MovieCard.module.css'

export default function MovieCard({movie}){
    return(
        <div className={classes.card}>
            <h1>{movie.title}</h1>

        </div>
    )
}