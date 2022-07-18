import React, { Component } from "react";
import style from './Searchbar.module.css';
// import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';


class Searchbar extends Component {
    state = {
        searchText: '',
    }
    searchInput = (e) => {
        console.log(e.currentTarget.value);
        this.setState({ searchText: e.currentTarget.value.toLowerCase() });
    };
    searchSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchText)
        this.setState({ searchText: '' });

    }
    render() {
        return (
            <header className={style.Searchbar}>
                <form
                    className={style.SearchForm}
                    onSubmit={this.searchSubmit}>
                    <button type="submit" className={style.SearchForm_button}>
                        <ImSearch />
                        <span className={style.button_label}>Search</span>
                    </button>

                    <input
                        className={style.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.searchInput}
                        value={this.state.searchText}
                    />
                </form>
            </header >
        );


    }
}
export default Searchbar;