import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const MoviesListItem = ({ title }) => {
  return (
    <li className={styles.trending_list_item}>
      <Link className={styles.trending_link} href="">
        {title}
      </Link>
    </li>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  title: PropTypes.string,
  //   onClick: PropTypes.func.isRequired,
};
