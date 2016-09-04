"use strict";
import CreateGame from './CreateGame';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <CreateGame url="http://localhost:3000/api/v1" />
      </div>
    );
  }
}
