import React, { Component } from 'react';

export default class CounterScreen extends Component {
  render() {
    return (
      <h1>Screen: { this.props.counter.counter } </h1>
    );
  }
}
