import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSubmenuContent } from '../../store/submenuSlice';
import { searchMoviesThunk, searchMoviesByTitleThunk } from '../../store/moviesSlice';
import './Header.css';

import logo from '../../img/logo.png';
import searchIcon from '../../img/Search.svg';

const Header = () => {
  const dispatch = useDispatch();
  const submenuContent = useSelector(state => state.submenu.content);
  const [searchQuery, setSearchQuery] = useState('');

  const submenuData = useMemo(() => ({
    all: [
      { title: 'Жанры', links: ['Комедия', 'Драма', 'Фантастика', 'Детектив', 'Анимэ'] },
      { title: 'По годам', links: ['2024', '2023', '2022', '2021', '2020'] },
      { title: 'По странам', links: ['США', 'Россия', 'Корея', 'Турция', 'Великобритания'] },
      { title: 'Телеканал', links: ['Кинопоиск', 'IVI', 'KION', 'Окко', 'Start'] },
    ],
    films: [
      { title: 'Жанры', links: ['Комедия', 'Драма', 'Фантастика', 'Детектив', 'Анимэ'] },
      { title: 'По годам', links: ['2024', '2023', '2022', '2021', '2020'] },
      { title: 'По странам', links: ['США', 'Россия', 'Корея', 'Турция', 'Великобритания'] },
      { title: 'Телеканал', links: ['Кинопоиск', 'IVI', 'KION', 'Окко', 'Start'] },
    ],
    cartoons: [
      { title: 'Жанры', links: ['Комедия', 'Драма', 'Фантастика', 'Детектив', 'Анимэ'] },
      { title: 'По годам', links: ['2024', '2023', '2022', '2021', '2020'] },
      { title: 'По странам', links: ['США', 'Россия', 'Корея', 'Турция', 'Великобритания'] },
      { title: 'Телеканал', links: ['Кинопоиск', 'IVI', 'KION', 'Окко', 'Start'] },
    ],
    series: [
      { title: 'Жанры', links: ['Комедия', 'Драма', 'Фантастика', 'Детектив', 'Анимэ'] },
      { title: 'По годам', links: ['2024', '2023', '2022', '2021', '2020'] },
      { title: 'По странам', links: ['США', 'Россия', 'Корея', 'Турция', 'Великобритания'] },
      { title: 'Телеканал', links: ['Кинопоиск', 'IVI', 'KION', 'Окко', 'Start'] },
    ],
  }), []);

  useEffect(() => {
    const searchBox = document.querySelector('.header__search_box');
    const searchButton = document.querySelector('.header__search_button');

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

  useEffect(() => {
    const navItems = document.querySelectorAll('.header__nav_items a');
    const submenu = document.getElementById('submenu');
    const submenuContentElement = document.querySelector('.submenu__dropdown-content');

    const generateSubmenuContent = (items) => {
      return items.map(item => `
        <div class="submenu__dropdown-column">
          <a href="#" class="submenu__dropdown_link-bold">${item.title}</a>
          <div class="submenu__dropdown-submenu">
            ${item.links.map(link => `<a href="#" class="submenu__dropdown_link">${link}</a>`).join('')}
          </div>
        </div>
      `).join('');
    };

    const handleNavItemMouseEnter = (event) => {
      const dropdownId = event.target.getAttribute('data-dropdown');
      submenuContentElement.innerHTML = generateSubmenuContent(submenuData[dropdownId]);
      submenu.style.display = 'block';
    };

    const handleNavItemMouseLeave = () => {
      setTimeout(() => {
        if (!submenu.matches(':hover')) {
          submenu.style.display = 'none';
        }
      }, 300);
    };

    navItems.forEach(item => {
      item.addEventListener('mouseenter', handleNavItemMouseEnter);
      item.addEventListener('mouseleave', handleNavItemMouseLeave);
    });

    submenu.addEventListener('mouseenter', () => {
      submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseleave', () => {
      submenu.style.display = 'none';
    });

    return () => {
      navItems.forEach(item => {
        item.removeEventListener('mouseenter', handleNavItemMouseEnter);
        item.removeEventListener('mouseleave', handleNavItemMouseLeave);
      });
      submenu.removeEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });
      submenu.removeEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    };
  }, [submenuData]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      const searchParams = {
        query: searchQuery,
        selectFields: ['name', 'rating.kp', 'poster.previewUrl', 'year', 'genres', 'countries'],
        notNullFields: ['rating.kp', 'poster.previewUrl'],
      };
      dispatch(searchMoviesThunk(searchParams));
      dispatch(searchMoviesByTitleThunk(searchQuery));
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Логотип" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav_item">
          <li className="header__nav_items">
            <Link to="#" data-dropdown="all" onMouseEnter={() => dispatch(setSubmenuContent(submenuData.all))}>Все</Link>
          </li>
          <li className="header__nav_items">
            <Link to="#" data-dropdown="films" onMouseEnter={() => dispatch(setSubmenuContent(submenuData.films))}>Фильмы</Link>
          </li>
          <li className="header__nav_items">
            <Link to="#" data-dropdown="cartoons" onMouseEnter={() => dispatch(setSubmenuContent(submenuData.cartoons))}>Мультфильмы</Link>
          </li>
          <li className="header__nav_items">
            <Link to="#" data-dropdown="series" onMouseEnter={() => dispatch(setSubmenuContent(submenuData.series))}>Сериалы</Link>
          </li>
        </ul>
        <form className="header__search_box" onSubmit={handleSearchSubmit}>
          <input
            className="header__search_input"
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="header__search_button" type="submit">
            <img src={searchIcon} className="header__search_img" alt="Поиск" />
          </button>
        </form>
      </nav>
      <div className="submenu" id="submenu" style={{ display: submenuContent.length ? 'block' : 'none' }}>
        <div className="submenu__dropdown-content">
          {submenuContent.map((item, index) => (
            <div className="submenu__dropdown-column" key={index}>
              <Link to="#" className="submenu__dropdown_link-bold">{item.title}</Link>
              <div className="submenu__dropdown-submenu">
                {item.links.map((link, linkIndex) => (
                  <Link to="#" className="submenu__dropdown_link" key={linkIndex}>{link}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
