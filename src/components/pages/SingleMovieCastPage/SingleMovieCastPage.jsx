import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { searchMovieIdCast } from '../../../shared/api/api';

import styles from './singleMovieCastPage.module.css';

const SingleMovieCastPage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    searchMovieIdCast(id)
      .then(data => {
        setMovie(data.cast);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  console.log(movie);

  return (
    <ul className={styles.list}>
      {movie &&
        movie.map(item => (
          <li className={styles.list_item} key={item.id}>
            <img
              className={styles.foto}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                  : `https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/622/9781672255622.jpg`
              }
              alt={item.name}
            />
            <span className={styles.name}>{item.name}</span>
            {item.content}
          </li>
        ))}
    </ul>
  );
};

export default SingleMovieCastPage;
