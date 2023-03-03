import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieDetails } from 'shared/api/api';

import styles from './styles.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // const fetchMovie = async () => {
    //     try {
    //         const result = await getSingleMovie(id);
    //         setMovie(result);
    //     } catch ({response}) {
    //         console.log(response.data.message);
    //     }
    // }
    // fetchMovie();

    getMovieDetails(id)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.tagline}
        />
        <div className={styles.textWrapper}>
          <p className={styles.textAbout}>
            Release date: <span>({`${movie.release_date}`.slice(0, 4)})</span>
          </p>
          <p className={styles.textAbout}>Overview:</p>
          <p className={styles.text}>{movie.overview}</p>
          <p className={styles.textAbout}>Genres:</p>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      {/* <div>
        <ul>
          <Link to="/movies/cast">
            <li>Cast</li>
          </Link>
          <Link to="/movies/Reviews">
            <li>Reviews</li>
          </Link>
        </ul>
      </div> */}
    </>
  );
};

export default MovieDetails;
