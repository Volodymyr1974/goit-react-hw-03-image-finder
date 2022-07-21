import React, { Component } from "react";
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';



class Searchbar extends Component {
    state = {
        searchText: '',
    }
    searchInput = (e) => {

        this.setState({ searchText: e.currentTarget.value.toLowerCase() });
    };
    searchSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchText.trim() === '') {
            return Notiflix.Notify.failure('Вибачте, поле пошуку не заповнено. Введіть запит для пошуку.');
        }
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
                        <ImSearch style={{ paddingTop: 10 }} />
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
};
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;