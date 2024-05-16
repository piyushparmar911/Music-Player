import React, { Component } from 'react'
import Navbar from './components/Navbar'
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
      </>
)
  }
}

export default App
