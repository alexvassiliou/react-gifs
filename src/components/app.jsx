import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx'

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEIliZyb2wqo8"
    }
    this.search("homer thinking");
  }

  search = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
      q: query,
      rating: 'g'
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  render() {
    return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={this.state.gifs} />
      </div>
    </div>
    );
  }
}

export default App;
