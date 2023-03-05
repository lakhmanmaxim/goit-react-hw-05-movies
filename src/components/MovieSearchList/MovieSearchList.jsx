import PropTypes from 'prop-types';
import styles from '../styles.module.css';

import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesSearchList = ({ items }) => {
  return (
    <>
      <ul className={styles.trending_list}>
        <h2 className={styles.trending_title}>Movies by your request: </h2>
        {items.map(({ id, title }) => (
          <MoviesListItem key={id} id={id} title={title} />
        ))}
      </ul>
    </>
  );
};

export default MoviesSearchList;

MoviesSearchList.defaultProprs = {
  items: [],
};

MoviesSearchList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
