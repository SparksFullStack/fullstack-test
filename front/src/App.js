import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Content from './Components/Content';

class App extends Component {
  state = {
    message: undefined
  }

  componentWillMount(){
    axios.get('http://localhost:3001/')
      .then(res => {
        this.setState({ message: res.data });
      })
      .catch(err => console.warn(err));
  }

  render() {
    const { message } = this.state;
    console.log(message);
    return (
      <div className="App">
        <Content />
        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
