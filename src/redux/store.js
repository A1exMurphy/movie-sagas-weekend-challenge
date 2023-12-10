import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_MOVIE', fetchOneMovie);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* fetchOneMovie(action) {
  try {
    
    console.log('movie from onClick', action.payload)
    // Get one movie:
    console.log('run the GET')
    const movieResponse = yield axios.get(`/api/genres/${action.payload.id}`);
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIE',
      payload: movieResponse.data
    });
  } catch (error) {
    console.log('fetchOneMovie error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Make state to store details of a single movie
const movie = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const clickMovie = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIE':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movie,
    movies,
    clickMovie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
