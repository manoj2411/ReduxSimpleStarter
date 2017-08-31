import React from 'react'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      reasonText: '',
    };
    // ES6 React.Component doesn't auto bind methods to itself.
    // You need to bind them yourself in constructor
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange (event) {
    this.setState({term: event.target.value});
    this.props.changeSearchTerm(event.target.value);
    // console.log(event.target.value);
  }

  render() {
      {/*
          <div>
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-8">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    onChange={this.onInputChange}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="row"> Searching for: {this.state.term} </div>
          </div>
      */}
    return (
      <div className="search-bar">
        <input type="text" onChange={this.onInputChange}/>
      </div>
    );
  }

}


export default SearchBar
