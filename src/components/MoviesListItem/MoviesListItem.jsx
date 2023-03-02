import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const MoviesListItem = ({ id, title }) => {
  return (
    <Link className={styles.trending_link} to={`/movies/${id}`}>
      <li className={styles.trending_list_item}>{title}</li>
    </Link>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: PropTypes.string,
  //   onClick: PropTypes.func.isRequired,
};
