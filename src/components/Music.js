import React, { Component } from "react";
import PropTypes from "prop-types";
import MusicItem from "./Musicitem";
import Spinner from "./Spinner";

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      page: 1,
      loading: false,
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
    this.props.ProgressBar(10);
    let url = `https://v1.nocodeapi.com/hettom/spotify/uqfqSzFMTSxxhMck/search?q=${this.props.searchText}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.props.ProgressBar(40);
    this.setState({ items: parsedata.albums.items ,
      loading: false,
  });
    this.props.ProgressBar(100);
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
            {this.state.loading  && <Spinner/>}
          </div>
          <div>
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
