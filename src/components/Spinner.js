import React, { Component } from 'react'
import spiner from './spiner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='justify-content-center d-flex my-3' >
        <img src={spiner} alt="Loading"  style={{height: "100px", width: "100px" }}/>
      </div>
    )
  }
}
