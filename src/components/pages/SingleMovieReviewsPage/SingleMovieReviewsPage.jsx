import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { searchMovieIdReviews } from '../../../shared/api/api';

import styles from './singleMovieReviewsPage.module.css';

const SingleMovieReviewsPage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    searchMovieIdReviews(id)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <ul className={styles.list}>
      {movie.total_results ?
        (movie.results.map(item => (
          <li className={styles.list_item} key={item.id}>
            <span className={styles.author}>{item.author}</span>
            {item.content}
          </li>
        ))) : (<p>There are currently no reviews...Sorry</p>)}
    </ul>
  );
};

export default SingleMovieReviewsPage;
