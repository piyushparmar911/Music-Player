import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Music from "./components/Music";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container d-flex">

          <Music title="songs"/>
        </div>
      </>
    );
  }
}

export default App;
