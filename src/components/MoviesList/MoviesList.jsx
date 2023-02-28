import PropTypes from 'prop-types';
import styles from '../styles.module.css';

import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ items }) => {
  return (
    <>
      <ul className={styles.trending_list}>
        <h2 className={styles.trending_title}>Trending movies of the week</h2>
        {items.map(({ id, title }) => (
          <MoviesListItem key={id} title={title} />
        ))}
      </ul>
    </>
  );
};

export default MoviesList;

MoviesList.defaultProprs = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
