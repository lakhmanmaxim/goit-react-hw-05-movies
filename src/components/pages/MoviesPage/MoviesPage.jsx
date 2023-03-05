import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from '../../../shared/Loader/LoaderSpinner';
import { searchMovie } from '../../../shared/api/api';
import MoviesSearchList from '../../MovieSearchList/MovieSearchList';

import styles from './styles.module.css';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (!search) {
      return;
    }

    setLoading(true);

    searchMovie(search)
      .then(data => {
        setItems(prevItems => [...data.results]);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button_label}>Search</span>
          </button>

          <input
            name="search"
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            required
          />
        </form>
      </header>

      {loading && <Loader />}
      {items.length === 0 && (
        <p className={styles.search_text}>Please, enter your request</p>
      )}
      {items.length > 0 && <MoviesSearchList items={items} error={error} />}
    </>
  );
};

export default MoviesPage;
