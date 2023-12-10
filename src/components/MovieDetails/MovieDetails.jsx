import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie)
    // console.log('movie', movie)


    const returnToMovieList = () => {
        dispatch({ type: 'FETCH_MOVIES' });
    
        history.push('/')
    }

//add a conditional to the movie State in order to prevent the render from occuring
//before the saga request could update the State
    return(
        movie.length > 0 && (
            <div data-testid="movieDetails">
                <button data-testid="toList" onClick={returnToMovieList}>back to movie list</button>


                 <div data-testid="movieDetail"  key={movie[0].id}>
                            <h3>
                                {movie[0].title}
                            </h3>
                            <img src={movie[0].poster} alt={movie[0].title} />

                            <p>{movie[0].description}</p>
                        </div>
                
                {movie.map(genre => {
                    return(
                       <>{genre.name}</>
                    )
                })}
                </div>
        )
    )}



export default MovieDetails;