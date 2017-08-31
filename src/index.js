import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
// Create new component. This should produce some html

const API_KEY = 'AIzaSyC6GISBA0_I2i6XGutr6wxPWIWrbOUgHfo';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: undefined
    };
    this.setVideostoProps = this.setVideostoProps.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch();
  }

  videoSearch(searchTerm = 'green day') {
    YTSearch({key: API_KEY, term: searchTerm}, this.setVideostoProps);
  }

  setVideostoProps(videos) {
    this.setState({
      videos,
      selectedVideo: videos[0]
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar changeSearchTerm={videoSearch} />
        <VideoDetail video={this.state.selectedVideo } />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={video => this.setState({selectedVideo: video})}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
