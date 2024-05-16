import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export class MusicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this.audio = new Audio(); // Create a new Audio object
  }

  // Function to handle play/pause
  handlePlayPause = () => {
    const { isPlaying } = this.state;
    const { audioSrc } = this.props;
    if (isPlaying) {
      this.audio.pause(); // Pause the audio
    } else {
      this.audio.src = audioSrc; // Set the audio source
      this.audio.play(); // Play the audio
    }
    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
  };

  render() {
    const { title, imageUrl, name } = this.props;
    const { isPlaying } = this.state;
    return (
      <>
        <div className="my-3 mx-2">
          <div className="card " style={{ width: "18rem" }}>
            <div className="card-body">
              <img
                className="card-img-top"
                src={imageUrl}
                style={{ width: "260px", height: "300px" }}
                alt={name}
              />
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{name}</p>
              {/* Play/Pause Icon */}
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                onClick={this.handlePlayPause}
                className="icon"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MusicItem;
