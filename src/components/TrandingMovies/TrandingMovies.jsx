import { useState, useEffect } from 'react';

import MoviesList from '../MoviesList/MoviesList';
import Loader from '../../shared/Loader/LoaderSpinner';
import { trendingMovies } from '../../shared/api/api';

const TrandingMovies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    trendingMovies()
      .then(data => {
        setItems(prevItems => [...data.results]);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [setItems, setLoading, setError]);

  return (
    <>
      {loading && <Loader />}
      <MoviesList items={items} error={error} />
    </>
  );
};

export default TrandingMovies;
