import React from "react";
import RandomWordList from "./RandomWordList";

class App extends React.Component {
  handleGenerate() {
    console.log("button pressed");
  }
  render() {
    return (
      <div className="App">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <RandomWordList />
        </div>
        <button
          onClick={this.handleGenerate}
          style={{ display: "block", margin: "auto" }}
        >
          Generate Insult
        </button>
      </div>
    );
  }
}

export default App;
