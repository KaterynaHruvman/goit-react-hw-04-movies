import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviesItem from '../MoviesItem/MoviesItem';

import styles from './MoviesList.mpdule.scss';

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={styles.moviesItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
              }}
            >
              <MoviesItem movie={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
