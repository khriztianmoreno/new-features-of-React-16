/**
 * @description More info: https://reactjs.org/docs/error-boundaries.html
 * @author Cristian Moreno
 */

import React, { Component } from 'react';

export default class Profile extends Component {
  onClick = () => {
    this.setState(state => {
      throw new Error("Oh nooo!");
      return { ...state };
    });
  };

  render() {
    return (
      <div onClick={this.onClick}>
        Name: {this.props.user.name}
      </div>
    );
  }
}
