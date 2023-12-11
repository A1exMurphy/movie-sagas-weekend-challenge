import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    // const genre = (state = "", action)

    const setGenre = () => {

    }


    const returnToMovieList = () => {

    
        history.push('/')
    }

//add a conditional to the movie State in order to prevent the render from occuring
//before the saga request could update the State
    return(
            <div>
                <h2>
                    Add Movie
                </h2>
                    <input
                        placeholder="Title">
                    </input>
                    <input
                        placeholder="Image URL">
                    </input>
                    <br></br>
                    <textarea
                        placeholder="Description"
                        type="text">
                    </textarea>
                    <select name="genre" onSelect={setGenre}>
                        <option value="Adventure">Adventure</option>
                        <option value="Animated">Animated</option>
                        <option value="Biographical">Biographical</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Disaster">Disaster</option>
                        <option value="Drama">Drama</option>
                        <option value="Epic">Epic</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Musical">Musical</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Space-Opera">Space-Opera</option>
                        <option value="Superhero">Superhero</option>
                    
                    </select>
                </div>
        )
    }



export default AddMovie;