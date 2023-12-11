import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';


function MovieList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    // console.log('movies returned from saga', movies)
  }, []);

//Occasionally the history was running before the dispatch successfully updated state
//the result was that sometimes but not always the render for MovieDetails(/details) 
//was failing because it returned an empty [], the implemented solution I've used is 
//a conditional in the MovieDetails render.
  const storeMovieDetails = (movie) => {
    dispatch({ type: 'FETCH_MOVIE', 
    payload: movie}),
    // console.log('trigger MovieDetails', movie)
    history.push('/details')
  }

  return (
    <main>
      <h1>MovieList</h1>
      <Link to="/add">
        <button>
          Add 
        </button>
        </Link>
      <section className="movies">
        {movies.map(movie =>  {
          // console.log('single movie from map', movie)
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid="toDetails" src={movie.poster} alt={movie.title} onClick={() => storeMovieDetails(movie)}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
