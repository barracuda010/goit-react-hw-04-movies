import React, { Component } from 'react';
import p from 'prop-types';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: p.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form_pos}>
        <input
          className={styles.form_size}
          onSubmit={this.handleSubmit}
          type="text"
          onChange={this.handleChange}
          value={value}
          placeholder="Введите название фильма"
        />
        <button type="submit" className={styles.form_btn}>
          Поиск
        </button>
      </form>
    );
  }
}
