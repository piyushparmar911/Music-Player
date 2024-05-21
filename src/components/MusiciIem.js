import React, { Component } from 'react'

export class MusicItem extends Component {
  render() {
    let {imageUrl,title,name,play} = this.props;
    return (
      <>
      <div className="my-3 mx-2">
        <div className="card  text-white  bg-dark"  style={{ width: "18rem" }}>
          <div className="card-body">
          <img className="card-img-top pt-1" src={imageUrl} style={{width: "260px", height: "300px" }} alt={name}/>
            <h5 className="card-title pt-2">{title}</h5>
            <p className="card-text">{name}</p>
            <a type="button" class="btn btn-outline-light" target='_blank' href="{play}">Play</a>
          </div>
        </div>
      </div>
      </>   
    )
  }
}

export default MusicItem
