"use strict";
import * as axios from 'axios';
import React, { Component } from 'react';

export default class CreateGame extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("didmoutn");
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  createGame = () => {
    console.log("createGame");
    axios.post(this.props.url + '/game', {
      name: 'kissa'
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.createGame}>Luo peli</button>
      </div>
    );
  }
};
