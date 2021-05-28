import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchMoviesTrend } from '../../servisecApi/movie-api';

import Container from '../../components/Container/Container';
import MoviesItem from '../../components/MoviesItem/MoviesItem';

import styles from './Home.module.scss';

class Home extends Component {
  state = {
    movies: [],
    // thisProps: '',
    err: false,
  };

  componentDidMount() {
    // const resTrends = fetchMoviesTrend()
    //   .then(moviesTrendData => this.setState({ movies: moviesTrendData }))
    //   .catch(err => {
    //     console.log('error with fetching of HomePage');
    //     console.error(err);
    //     return this.setState({ err: true });
    //   });
    // console.log('resTrends: ', resTrends); // первый вариант
    const resTrends = async () => {
      try {
        const moviesData = await fetchMoviesTrend();
        this.setState({ movies: moviesData });
      } catch (error) {
        this.setState({ err: true });
      } finally {
        console.log('finally is done');
      }
    };
    resTrends();
    // console.log(' fetchTrends(): ', fetchTrends()); // второй
  }
  // async componentDidMount() {
  //   try {
  //     const moviesData = await fetchMoviesTrend();

  //     this.setState({
  //       movies: moviesData,
  //     });
  //   } catch (error) {
  //     console.error('Smth wrong with homepage trends fetch', error);
  //     this.setState({ err: true });
  //   }
  // } // третий

  render() {
    const { movies } = this.state;

    return (
      <Container>
        <h1 className={styles.homePageTitle}>movies trends by last week</h1>

        <ul className={styles.moviesList}>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
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
      </Container>
    );
  }
}

export default Home;