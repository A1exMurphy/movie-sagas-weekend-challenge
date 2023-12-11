import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [selectGenre, setSelectGenre] = useState("");
    // console.log(selectGenre, "current genre selection")

//after new movie details are submitted I want to return to the list of all movies
//with the updated list
    const returnToMovieList = () => {
        let newMovie = {
            title: document.getElementById("title").value,
            poster: document.getElementById("url").value,
            description: document.getElementById("description").value,
            name: selectGenre
        }
        console.log('newMovie', newMovie)

        // dispatch({ type: 'SUBMIT_MOVIE', 
        // payload: newMovie});
    
        history.push('/')
    }


    return(
            <div>
                <h2>
                    Add Movie
                </h2>
                <form onSubmit={returnToMovieList}>
                    <input
                        id="title"
                        // value=""
                        placeholder="Title">
                    </input>

                    <input
                        id="url"
                        // value=""
                        placeholder="Image URL">
                    </input>

                    <br></br>

                    <textarea
                        id="description"
                        placeholder="Description"
                        type="text">
                    </textarea>

                    <br></br>

                    <select name="genre" onChange={(event) => setSelectGenre(event.target.value)}>
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

                    <button 
                        onClick={returnToMovieList}>
                        Submit
                    </button></form>
                </div>
        )
    }



export default AddMovie;