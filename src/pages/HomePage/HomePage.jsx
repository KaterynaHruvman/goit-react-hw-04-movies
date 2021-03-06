import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { fetchMoviesTrend } from '../../servicesApi/movie-api';

import Container from '../../components/Container';
import MoviesItemHomePage from '../../components/MoviesItemHomePage';

import styles from './stylesHomePage.module.scss';

class HomePage extends Component {
  state = {
    movies: [],
    // thisProps: '',
    err: false,
  };

  componentDidMount() {
    
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
    const { movies, location } = this.state;

    return (
      <Container>
        <h1 className={styles.homePageTitle}>Movies trends by last week</h1>

        <ul className={styles.moviesList}>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                     state: { from: location },
                  }}
                >
                  <MoviesItemHomePage movie={movie} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

export default withRouter(HomePage);
