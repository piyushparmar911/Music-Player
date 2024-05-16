import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicItem from './MusicItem';

export default class Music extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            page: 1,
            currentlyPlaying: null
        };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    async componentDidMount() {
        let url = "https://v1.nocodeapi.com/mitchelmgh/spotify/EBNYjcTvuvNIhiDn/search?q=Hot%20Hit%20Hindi";
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ items: parsedata.albums.items });
    }

    // Function to handle play/pause
    handlePlayPause = (title, audioSrc) => {
        const { currentlyPlaying } = this.state;
        if (currentlyPlaying === title) {
          this.setState({ currentlyPlaying: null });
          this.audio.pause(); // Pause the audio
        } else {
          this.setState({ currentlyPlaying: title });
          this.audio.src = audioSrc; // Set the audio source
          this.audio.play(); // Play the audio
        }
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center my-4">{this.props.title}</h1>
                <div className="mx-2 row">
                    {this.state.items.map((element) => {
                        return (
                            <div className="col-md-3" key={element.id}>
                                <MusicItem
                                    title={element.name}
                                    name={element.artists[0].name}
                                    imageUrl={element.images[0].url}
                                    onPlayPause={(title, audioSrc) => this.handlePlayPause(element.name, element.audioSrc)}
                                    isPlaying={this.state.currentlyPlaying === element.name}
                                    audioSrc={element.audioSrc}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-between py-5">
                    <button type="button">&larr; Previous</button>
                    <button type="button" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        );
    }
}
