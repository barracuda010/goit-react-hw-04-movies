import React, { Component } from 'react';
import p from 'prop-types';
import * as API from '../../movie-api';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
  static propTypes = {
    match: p.shape({}),
    params: p.object,
    movieId: p.string,
  }.isRequired;

  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { match } = this.props;
    API.filmReviews(match.params.movieId).then(res => {
      this.setState({ reviews: res.data.results });
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.map(el => (
            <li key={el.id} className={styles.rev_text}>
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
