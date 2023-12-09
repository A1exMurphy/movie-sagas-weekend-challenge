import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MovieList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
    console.log('movies returned from saga', movies)
  }, []);

  const storeMovieDetails = (movie) => {
    dispatch({ type: 'SET_MOVIE', 
    payload: movie})
    console.log('trigger MovieDetails', movie)
    history.push('/details')
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie =>  {
          // console.log('single movie from map', movie)
          return (
            <div data-testid='movieItem' key={movie.id} onClick={() => storeMovieDetails(movie)}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
