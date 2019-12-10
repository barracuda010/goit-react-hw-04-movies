import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Nav';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPages from './pages/MoviesPages/MoviesPages';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <Navigation />
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.MOVIES_ID} component={MovieDetailsPage} />
          <Route path={routes.MOVIES} component={MoviesPages} />
        </Switch>
      </>
    );
  }
}
