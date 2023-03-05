import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../../components/pages/MoviesPage/styles.module.css';

const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState({});

  const onFormSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...state });
    // console.log(state);
    setState({});
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

//   const { search } = state;

  return (
    <form className={styles.searchForm} onSubmit={onFormSubmit}>
      <button type="submit" className={styles.searchForm_button}>
        <span className={styles.searchForm_button_label}>Search</span>
      </button>

      <input
        name="search"
        onChange={onInputChange}
        // value={search}
        className={styles.searchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        required
      />
    </form>
  );
};

export default SearchBar;

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
