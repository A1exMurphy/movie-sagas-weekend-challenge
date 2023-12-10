import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie)
    console.log('movie', movie)


    const returnToMovieList = () => {
        dispatch({ type: 'FETCH_MOVIES' });
    
        history.push('/')
    }

    return(
        <>
            <div data-testid="movieDetails">
                <button data-testid="toList" onClick={returnToMovieList}></button>
                {movie.map(movieCondensed => {

                    return(
                        <div data-testid="movieDetail"  key={movieCondensed.id}>
                            <h3>
                                {movieCondensed.title}
                            </h3>

                            {movieCondensed.name}
                            <img src={movieCondensed.poster} alt={movieCondensed.title} />

                            <p>{movieCondensed.description}</p>
                        </div>
                    )
                })}
                </div>
    </>
    )}



export default MovieDetails;