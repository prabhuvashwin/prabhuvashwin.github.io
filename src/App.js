import React, { Component } from 'react';
import { hot } from "react-hot-loader/root";

class App extends Component {
  render() {
    const { name } = this.props;

    return (
      <h1>
        Hello {name}
      </h1>
    );
  }
}

export default hot(App);
