import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movie)
    console.log('movie', movie)

    // const showSingleMovie = (movie) => {

    // }
    const returnToMovieList = () => {
        dispatch({ type: 'FETCH_MOVIE' });
    
        history.push('/')
    }

    return(
        <>
            <div>
                <button onClick={returnToMovieList}></button>
                <div 
                    data-testid='movieItem' 
                    key={movie.id}>   
                    <p>Movie goes here</p>
                    <div>
                        <h3>{movie.title}</h3> 
                        <img src={movie.poster} alt={movie.title}/>
                        <br></br>
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MovieDetails;