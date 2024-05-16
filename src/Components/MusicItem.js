import React, { Component } from 'react'

export class MusicItem extends Component {
  render() {
    let {imageUrl,title,name} = this.props;
    return (
      <>
      <div className="my-3 mx-2">
        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body">
          <img className="card-img-top" src={imageUrl} style={{width: "260px", height: "300px" }} alt={name}/>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{name}</p>

          </div>
        </div>
      </div>
      </>   
    )
  }
}

export default MusicItem
