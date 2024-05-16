import React, { Component } from "react";

export class MusicItem extends Component {

  render() {
    return (
      <>
        <div className="my-3 mx-2">
          <div className="card " style={{ width: "18rem" }}>
            <img className="card-img-top" src={{}} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MusicItem;
