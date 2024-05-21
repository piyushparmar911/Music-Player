import React, { Component } from "react";
import PropTypes from "prop-types";
import MusicItem from "./MusiciIem";

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      page: 1,
    };
  }

  static defaultProps = {
    title: "test1",
    name: "arijit",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  async fetchSong() {
    let url = `https://v1.nocodeapi.com/yashsen1254/spotify/rmwPnSlYdLGbZGeb/search?q=${this.props.searchText}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ items: parsedata.albums.items });
  }

  async componentDidMount() {
    this.fetchSong();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      this.fetchSong();
    }
  }

  getfirstTwoWord(text) {
    let words = text.split(" ");
    return words.slice(0, 4).join(" ");
  }

  render() {
    return (
      <div className="container" style={{ background: "black" }}>
        <div className="d-flex justify-content-between align-items-center my-4">
          <div className="flex-grow-1 text-center">
            <h1>{this.props.title}</h1>
          </div>
        </div>

        <div className="mx-2 row">
          {this.state.items.map((element) => {
            const shortTitle = this.getfirstTwoWord(element.name);
            return (
              <div className="col-md-3" key={element.id}>
                <MusicItem
                  title={shortTitle}
                  name={element.artists[0].name}
                  imageUrl={element.images[0].url}
                  play={element.artists[0].external_urls.spotify}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
