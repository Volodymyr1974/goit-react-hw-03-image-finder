import Searchbar from './Searchbar/Searchbar';
import React, { Component } from "react";
import ImageGallery from './ImageGallery/ImageGallery';
import style from './App.module.css';

export default class App extends Component {
  state = {
    searchText: '',
    page: 1,
  }
  searchTextSubmit = (searchText) => {
    console.log(searchText);
    this.setState(
      {
        searchText,
        page: 1
      });
  };
  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,

    }));
    console.log(10);
  };

  render() {
    const { searchText, page } = this.state;
    return (
      <div className={style.App} >
        <Searchbar onSubmit={this.searchTextSubmit} />
        <ImageGallery
          searchQwery={searchText}
          pageNumber={page}
          onLoadMoreBtn={this.loadMoreBtn}
        />
      </div>
    );
  }

};
