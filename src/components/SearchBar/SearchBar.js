import React, { useEffect, useState } from 'react';
import { searchMovies, searchMoviesByTitle } from '../../api/kinopoiskApi';
import './SearchBar.css';

import searchIcon from '../../img/Search.svg';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const searchBox = document.querySelector('.search__box');
        const searchButton = document.querySelector('.search__button');

        const handleSearchButtonMouseOver = () => {
            searchBox.classList.add('expanded');
        };

        const handleSearchBoxMouseLeave = () => {
            searchBox.classList.remove('expanded');
        };

        searchButton.addEventListener('mouseover', handleSearchButtonMouseOver);
        searchBox.addEventListener('mouseleave', handleSearchBoxMouseLeave);

        return () => {
            searchButton.removeEventListener('mouseover', handleSearchButtonMouseOver);
            searchBox.removeEventListener('mouseleave', handleSearchBoxMouseLeave);
        };
    }, []);

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            let results;
            if (/^[a-zA-Zа-яА-Я\s]+$/.test(searchQuery)) { // Проверка на текст
                results = await searchMoviesByTitle(searchQuery);
            } else {
                const searchParams = {
                    query: searchQuery,
                    selectFields: ['name', 'rating.kp', 'poster.previewUrl', 'year', 'genres', 'countries'],
                    notNullFields: ['rating.kp', 'poster.previewUrl'],
                };
                results = await searchMovies(searchParams);
            }
            console.log(results); // Выводим результаты в консоль
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    return (
        <div className="search container_midle center_midle">
            <form className="search__box" onSubmit={handleSearchSubmit}>
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Поиск"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="search__button" type="submit">
                        <img src={searchIcon} className="search__img" alt="Поиск" />
                    </button>
            </form>
        </div>
    );
};

export default SearchBar;