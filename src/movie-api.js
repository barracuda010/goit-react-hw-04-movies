import axios from 'axios';

const apiKey = '81d4397645ad96b495f4ebbeead1090d';

export const popularMovies = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
  );

export const exactMovie = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ru-RU`,
  );

export const searchMovie = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ru-RU&query=${query}&page=1&include_adult=false`,
  );

export const filmCharacters = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
  );

export const filmReviews = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );
