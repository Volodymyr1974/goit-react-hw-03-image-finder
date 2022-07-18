import Searchbar from './Searchbar/Searchbar';
import React, { Component } from "react";

export default class App extends Component {
  state = {
    searchText: '',
  }
  searchTextSubmit = (searchText) => {
    console.log(searchText);
    this.setState({ searchText });
  }
  render() {
    return (
      <div  >
        <Searchbar onSubmit={this.searchTextSubmit} />
      </div>
    );
  }

};
