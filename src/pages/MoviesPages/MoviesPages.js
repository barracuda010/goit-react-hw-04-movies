import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import p from 'prop-types';
import routes from '../../routes';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as API from '../../movie-api';
import styles from './MoviesPages.module.css';

export default class MoviesPages extends Component {
  static propTypes = {
    location: p.object,
    search: p.string,
    history: p.object,
    push: p.object,
  }.isRequired;

  state = {
    films: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('query');
    if (!currentSearch) {
      return;
    }
    this.fetchFilms(currentSearch);
  }

  componentDidUpdate(prevProps) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('query');
    if (prevSearch && prevSearch === currentSearch) {
      return;
    }
    this.fetchFilms(currentSearch);
  }

  fetchFilms = q => {
    API.searchMovie(q).then(res => this.setState({ films: res.data.results }));
  };

  onSearchSubmit = query => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?query=${query}`,
    });
  };

  render() {
    const { films } = this.state;
    return (
      <div className={styles.container}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ul className={styles.movie_pos}>
          {films.length > 0 &&
            films.map(el => (
              <li key={el.id} className={styles.movie_size}>
                <NavLink
                  to={`${routes.MOVIES}/${el.id}`}
                  className={styles.movie_name}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt=""
                  />
                  <p>{el.title}</p>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
