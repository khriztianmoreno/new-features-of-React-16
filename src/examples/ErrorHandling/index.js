/**
 * @description More info: https://reactjs.org/docs/error-boundaries.html
 * @author Cristian Moreno
 */
import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Profile from './Profile';

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "Chris" }
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser() {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <ErrorBoundary>
        <Profile user={this.state.user} />
        <button onClick={this.updateUser}>Update</button>
      </ErrorBoundary>
    );
  }
}

export default ErrorHandling;
