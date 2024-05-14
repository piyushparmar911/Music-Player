import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MusicItem from './components/MusicItem'

export class App extends Component {
  render() {
    return (
      <div>
  <Navbar/>        
  <MusicItem/>
      </div>
)
  }
}

export default App
