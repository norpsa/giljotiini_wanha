"use strict";
import * as axios from 'axios';
import React, { Component } from 'react';

export default class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games : [],
      name : ""
    }
  }

  componentDidMount() {
    axios.get(this.props.url + '/game')
    .then((res) => {
      this.setState( {
        games : res.data
      });
      console.log(this.state.games);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  createGame = () => {
    console.log("createGame");
    axios.post(this.props.url + '/game',
    {
      name: this.state.name
    })
    .then((res) => {
      console.log(res);
      //TODO: add game to state
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateName = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.games.map(function(game) {
            return <li key={game.id}>{game.name}</li>;
          })}
        </ul>
          <input value={this.state.name} type="text" onChange={this.updateName}/>
          <button onClick={this.createGame}>Luo peli</button>
      </div>
    );
  }
};
