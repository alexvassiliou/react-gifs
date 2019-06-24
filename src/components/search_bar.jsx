import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input 
        type="text" 
        className="form-control form-search"
        onChange={this.handleUpdate} 
      />
    );
  }
}

export default SearchBar;
