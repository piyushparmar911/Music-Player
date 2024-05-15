import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Music from './components/Music'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Music />        
      </div>
)
  }
}

export default App
