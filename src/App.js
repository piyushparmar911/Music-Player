import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Music from "./components/Music";

export class App extends Component {
  constructor ()
  {
    super();
    this.state = {
      searchText: "Arijit Singh"
    };
  }
  updateserchText = (newserchText) => {
    this.setState({searchText: newserchText});
  }
 render() {
    return (
      <div className=" text-white" style={{background: "black"}}> 
        <Navbar  searchText={this.state.searchText} onSearch={this.updateserchText}/>
        <div className=" d-flex">

          <Music title="Songs" searchText={this.state.searchText}/>
        </div>
      </div>
    );
  }
}

export default App;