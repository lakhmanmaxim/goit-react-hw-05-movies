import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '294902272f63193a25077f4f88077abd',
  },
});

export const trendingMovies = async () => {
  const media_type = 'movie';
  const time_window = 'week';

  const { data } = await instance.get(`/trending/${media_type}/${time_window}`);

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const searchMovie = async query => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
};

export const searchMovieIdCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const searchMovieIdReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
