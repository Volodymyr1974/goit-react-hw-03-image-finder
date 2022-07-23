import React, { Component } from "react";
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';



class Searchbar extends Component {
    state = {
        searchText: '',
        qwery: '',
    }
    searchInput = (e) => {
        // console.log(this.state);
        this.setState({ qwery: e.currentTarget.value.toLowerCase() });
        // console.log(this.state);
    };
    searchSubmit = (e) => {
        e.preventDefault();
        if (this.state.qwery.trim() === '') {
            return Notiflix.Notify.failure('Вибачте, поле пошуку не заповнено. Введіть запит для пошуку.');
        }
        if (this.state.searchText === this.state.qwery) {
            return Notiflix.Notify.failure('Вибачте, такий запит вже оброблено. Введіть інший запит для пошуку, або натисніть  "Load More');
        }
        this.setState({ searchText: this.state.qwery });
        console.log(this.state);
        this.props.onSubmit(this.state.qwery)
        // this.setState({ searchText: '' });
    }
    render() {
        // console.log(this.state);
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
                        value={this.state.qwery}
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