import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Music from "./components/Music";
import ProgressBar from "@ramonak/react-progress-bar";
import "./App.css"

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

  ProgressBar = (completed) => {
    this.setState({completed: completed});
  }  

 render() {
    return (
      <div className=" text-white" style={{background: "black"}}> 
        <Navbar  searchText={this.state.searchText} onSearch={this.updateserchText}/>
  <ProgressBar
  completed={this.state.completed}
  height="1px"
  bgColor="aqua"
  borderRadius="0px"
  labelSize="0px"
  baseBgColor="black"
/>
        <div className=" d-flex">

          <Music title="Songs" ProgressBar={this.ProgressBar} searchText={this.state.searchText}/>
        </div>
      </div>
    );
  }
}

export default App;
