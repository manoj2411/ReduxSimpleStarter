import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
// Create new component. This should produce some html

const API_KEY = 'AIzaSyC6GISBA0_I2i6XGutr6wxPWIWrbOUgHfo';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {videos: []}
    this.setVideostoProps = this.setVideostoProps.bind(this);

    YTSearch({key: API_KEY, term: 'surfboards'}, this.setVideostoProps)
  }

  setVideostoProps(videos) {
    // console.log('setVideostoProps');
    // console.log(videos)
    this.setState({videos});
    // console.log(this.state.videos);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
