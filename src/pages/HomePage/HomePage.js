import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../movie-api';
import routes from '../../routes';
import styles from './HomePage.module.css';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    API.popularMovies().then(res =>
      this.setState({ movies: res.data.results }),
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.container}>
        <ul className={styles.movie_pos}>
          {movies.length > 0 &&
            movies.map(el => (
              <li key={el.id} className={styles.movie_size}>
                <Link
                  to={`${routes.MOVIES}/${el.id}`}
                  className={styles.movie_name}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt=""
                  />
                  <p>{el.title || el.name}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
