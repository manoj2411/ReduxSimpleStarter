import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
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
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
