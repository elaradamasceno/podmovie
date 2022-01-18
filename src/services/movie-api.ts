import axios from "axios";

export const getMovies = async () => {
  return await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
};

export const popularMovies = async () => {
  return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&page=1`)
}

export const trendingMovies = async () => {
  return await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR`)
}

export const getVideoById = async (movieId: number) => {
  return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR`)
}

export const getReviewsMovie = async (movieId: number) => {
  return await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&page=1`)
}