import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from "../../SearchBar/SearchBar"
import Loader from '../../../shared/Loader/LoaderSpinner';
import { searchMovie } from '../../../shared/api/api';
import MoviesSearchList from '../../MovieSearchList/MovieSearchList';

import styles from './styles.module.css';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
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
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [search]);

  const onFormSubmit = ({ search }) => {
    setSearchParams({ search });
    // console.log(search);
  };

  // console.log(items);

  return (
    <>
      <header className={styles.searchbar}>
      <SearchBar onSubmit={onFormSubmit}/>
      </header>

      {loading && <Loader />}
      {items.length === 0 && (
        <p className={styles.search_text}>Please, enter your request</p>
      )}
      {items.length > 0 && <MoviesSearchList items={items} />}
    </>
  );
};

export default MoviesPage;
