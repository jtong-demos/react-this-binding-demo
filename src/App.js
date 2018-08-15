import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArrowFunctionExample from "./examples/ArrowFunction"
import BindMethodExample from "./examples/BindMethod"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArrowFunctionExample />
        <BindMethodExample />
      </div>
    );
  }
}

export default App;
