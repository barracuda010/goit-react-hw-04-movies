import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import p from 'prop-types';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import * as API from '../../movie-api';
import routes from '../../routes';
import styles from './MovieDetailsPage.module.css';

export default class MoviesDetailsPage extends Component {
  static propTypes = {
    match: p.object,
    params: p.object,
    movieId: p.string,
    history: p.object,
    goBack: p.func,
  }.isRequired;

  state = {
    film: { genres: [] },
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    const { match } = this.props;
    const filmId = match.params.movieId;
    API.exactMovie(filmId).then(res => this.setState({ film: res.data }));
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { film } = this.state;
    const { match } = this.props;
    const genres = film.genres.reduce((acc, el) => `${acc} ${el.name},`, '');
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <button
            type="button"
            onClick={this.handleGoBack}
            className={styles.btn}
          >
            Назад
          </button>
          <div className={styles.info_pos}>
            <div>
              <h2>
                {film.title} ({(film.release_date || '').slice(0, 4)})
              </h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt=""
                className={styles.pic_size}
              />
            </div>
            <div className={styles.about_size}>
              <h3 className={styles.info_size}>Описание: </h3>
              <p>{film.overview}</p>
              <h3 className={styles.info_size}>Оценка пользователя:</h3>
              <p>{film.vote_average * 10} %</p>
              <h3 className={styles.info_size}>Жанр:</h3>
              <p>{genres}</p>
            </div>
          </div>
          <ul className={styles.cast}>
            <li>
              <Link to={`${match.url}/cast`} className={styles.cast_link}>
                В ролях
              </Link>
            </li>
            <li className={styles.cast_link}>
              <Link to={`${match.url}/reviews`} className={styles.cast_link}>
                Комментарии:
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path={routes.MOVIES_CAST} component={Cast} />
            <Route path={routes.MOVIES_REVIEWS} component={Reviews} />
          </Switch>
        </div>
      </div>
    );
  }
}
