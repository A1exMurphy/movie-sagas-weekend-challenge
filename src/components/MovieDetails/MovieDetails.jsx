import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MovieDetails(movie) {
    const history = useHistory();
    // console.log('movie', movie)
    const dispatch = useDispatch();


    const returnToMovieList = () => {
        history.push('/')
    }

    return(
        <>
            <div onClick={returnToMovieList}>
                <div 
                    data-testid='movieItem' 
                    key={movie.id}>   
                    <div>
                        <h3>{movie.title}</h3> 
                        {/* {movie.description} */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default MovieDetails;