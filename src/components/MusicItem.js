import React, { Component } from "react";

export class MusicItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.title}</h5>
            <p className="card-text">{this.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicItem;
