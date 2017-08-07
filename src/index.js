import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
// Create new component. This should produce some html

const API_KEY = 'AIzaSyC6GISBA0_I2i6XGutr6wxPWIWrbOUgHfo';


const App = () => {
  return <div> <SearchBar /> </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
