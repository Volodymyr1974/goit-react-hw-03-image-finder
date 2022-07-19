import Searchbar from './Searchbar/Searchbar';
import React, { Component } from "react";
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchText: '',
    page: 1,
  }
  searchTextSubmit = (searchText) => {
    console.log(searchText);
    this.setState({ searchText, page: 1 });
  }
  render() {
    const { searchText, page } = this.state;
    return (
      <div  >
        <Searchbar onSubmit={this.searchTextSubmit} />
        <ImageGallery
          searchQwery={searchText}
          pageNumber={page}
        />
      </div>
    );
  }

};
