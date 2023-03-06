import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const MoviesListItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <Link
      className={styles.trending_link}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li className={styles.trending_list_item}>{title}</li>
    </Link>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  //   onClick: PropTypes.func.isRequired,
};
