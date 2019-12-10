import React, { Component } from 'react';
import p from 'prop-types';
import * as API from '../../movie-api';
import styles from './Cast.module.css';

export default class Cast extends Component {
  static propTypes = {
    match: p.shape({}),
    params: p.object,
    movieId: p.string,
  }.isRequired;

  state = {
    actors: [],
  };

  componentDidMount() {
    this.fetchActors();
  }

  fetchActors = () => {
    const { match } = this.props;
    API.filmCharacters(match.params.movieId).then(res => {
      this.setState({ actors: res.data.cast });
    });
  };

  render() {
    const { actors } = this.state;
    return (
      <>
        <ul className={styles.cast_pos}>
          {actors
            .map(el => (
              <li key={el.id} className={styles.cast_size}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt=""
                />
                <p className={styles.cast_name}>
                  {el.name} / {el.character}
                </p>
              </li>
            ))
            .slice(0, 21)}
        </ul>
      </>
    );
  }
}
