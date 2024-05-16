import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Music from './components/Music'
import MusicItem from './components/MusicItem'

export class App extends Component {
  render() {
    return (
      <>
  <Navbar/>

<div className='container d-flex'>

  <MusicItem title={"hello"} description={"hii"}/>
  <MusicItem/>
</div>
      <div>
        <Navbar />
        <Music />        
      </div>
      </>
)
  }
}

export default App
