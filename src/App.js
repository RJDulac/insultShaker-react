import React, { Component } from "react";
import Cat from "./Cat";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cat turtle="test" />
        <Cat turtle="cool" />
      </div>
    );
  }
}

export default App;
