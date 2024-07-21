import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMoviesThunk, fetchTop250MoviesThunk, fetchCartoonsThunk, fetchSerialsThunk } from '../../store/moviesThunks';
import MoviesSection from './MoviesSection';
import RegistrationBlock from './RegistrationBlock';
import './ContentHome.css';
import plusIcon from '../../img/plus.png';
import minusIcon from '../../img/minus.png';
import { Link } from 'react-router-dom';

const colors = [
    'var(--dop-1)',
    'var(--dop-2)',
    'var(--dop-3)',
    'var(--dop-4)',
    'var(--dop-5)',
    'var(--dop-6)',
    'var(--dop-7)'
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const getRandomItems = (array, numItems) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
};

const ContentHome = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.movies.popular);
    const top250Movies = useSelector(state => state.movies.top250);
    const cartoons = useSelector(state => state.movies.cartoons);
    const serials = useSelector(state => state.movies.serials);

    useEffect(() => {
        dispatch(fetchPopularMoviesThunk());
        dispatch(fetchTop250MoviesThunk());
        dispatch(fetchCartoonsThunk());
        dispatch(fetchSerialsThunk());
    }, [dispatch]);

    const handleLikeClick = (e, index) => {
        e.preventDefault();
        const likeCountElement = document.getElementById(`like-count-${index}`);
        let likeCount = parseInt(likeCountElement.textContent);
        likeCountElement.textContent = likeCount + 1;
    };

    const handleDislikeClick = (e, index) => {
        e.preventDefault();
        const dislikeCountElement = document.getElementById(`dislike-count-${index}`);
        let dislikeCount = parseInt(dislikeCountElement.textContent);
        dislikeCountElement.textContent = dislikeCount + 1;
    };

    return (
        <main className="content-home container_midle center_midle">
            <svg className="svg-left" width="504" height="547" viewBox="0 0 504 547" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_126_1292)">
                <path fillRule="evenodd" clipRule="evenodd" d="M-3.42292 409.41C45.8028 495.674 134.787 446.14 221.3 396.773C331.872 333.676 459.77 291.251 396.854 180.996C333.388 69.7765 193.015 70.6372 81.4751 134.286C-6.27059 184.357 -53.3503 321.916 -3.42292 409.41Z" fill="url(#paint0_linear_126_1292)" />
                </g>
                <defs>
                <filter id="filter0_f_126_1292" x="-113.783" y="0.924316" width="617.283" height="545.525" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_126_1292" />
                </filter>
                <linearGradient id="paint0_linear_126_1292" x1="25.5644" y1="488.546" x2="425.841" y2="260.133" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1AECDF" />
                    <stop offset="0.545062" stopColor="#1761DA" />
                    <stop offset="1" stopColor="#EC33CC" />
                </linearGradient>
                </defs>
            </svg>
            <svg className="svg-right" width="465" height="530" viewBox="0 0 465 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_126_1294)">
                <path fillRule="evenodd" clipRule="evenodd" d="M545.618 354.491C551.443 327.589 558.221 299.954 545.256 270.425C532.846 242.161 496.033 221.445 475.421 194.611C450.19 161.761 453.734 112.735 410.701 95.2432C366.888 77.4347 337.987 118.426 295.742 121.577C261.227 124.151 221.24 106.491 188.171 111.841C149.243 118.139 99.3545 124.144 91.5228 154.618C83.4672 185.964 130.846 221.473 151.188 255.749C166.485 281.523 180.322 306.111 196.618 331.699C218.207 365.599 219.936 412.924 262.866 431.112C306.144 449.448 336.318 408.29 379.909 409.355C422.418 410.394 473.671 448.881 509.163 437.13C543.701 425.695 539.067 384.748 545.618 354.491Z" fill="url(#paint0_linear_126_1294)" />
                </g>
                <defs>
                <filter id="filter0_f_126_1294" x="0.610352" y="0.777344" width="642.067" height="528.582" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_126_1294" />
                </filter>
                <linearGradient id="paint0_linear_126_1294" x1="557.708" y1="360.408" x2="90.9244" y2="154.951" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2F026" />
                    <stop offset="1" stopColor="#1AECDF" />
                </linearGradient>
                </defs>
            </svg>

            <div className="content-home__popular">
                <h2 className="content-home__txt">Популярное</h2>
                <div className="content-home__grid">
                    {getRandomItems(popularMovies, 6).map((movie, index) => {
                        const randomColor = getRandomColor();
                        return (
                            <Link key={index} to="#" className={`content-home__wrapper ${index > 2 ? 'collapsed-card' : ''}`}>
                                {movie.poster && movie.poster.previewUrl && (
                                    <img src={movie.poster.previewUrl} alt="Постер" className="content-home__img" />
                                )}
                                <div className="content-home__gradient"></div>
                                {movie.rating && movie.rating.kp && (
                                    <div className="content-home__rating" style={{ color: randomColor }}>{movie.rating ? movie.rating.kp.toFixed(1) : 'N/A'}</div>
                                )}
                                <div className="content-home__wrap">
                                    <div className="content-home__number">
                                        <p style={{ color: randomColor }}>{index + 1}</p>
                                    </div>
                                    <div className="content-home__box">
                                        <h4 className="content-home__title">
                                            {movie.name || movie.alternativeName || 'Untitled'}
                                        </h4>
                                        <div className="content-home__desc">
                                            <p className="content-home__year">{movie.year}<span></span></p>
                                            <p className="content-home__genre">{movie.genres.map(genre => genre.name).join(', ')}<span></span></p>
                                            <p className="content-home__country">{movie.countries.map(country => country.name).join(', ')}</p>
                                        </div>
                                        <div className="content-home__likes">
                                            <button className="content-home__btn-like" onClick={(e) => handleLikeClick(e, index)}>
                                                <img src={plusIcon} alt="Like" /><p id={`like-count-${index}`}>0</p>
                                            </button>
                                            <button className="content-home__btn-dislike" onClick={(e) => handleDislikeClick(e, index)}>
                                                <img src={minusIcon} alt="Dislike" /><p id={`dislike-count-${index}`}>0</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <MoviesSection title="Фильмы" movies={top250Movies} link="/movies" />
            <MoviesSection title="Мультфильмы" movies={cartoons} link="/cartoons" />
            <MoviesSection title="Сериалы" movies={serials} link="/series" />

            <RegistrationBlock />
        </main>
    );
};

export default ContentHome;