import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesSection.css';

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

const MoviesSection = ({ title, movies, link }) => {
    const randomMovies = getRandomItems(movies, 3);

    return (
        <div className="content-home__movies">
            <h2 className="content-home__txt">{title}</h2>
            <div className="content-home__grid-container">
                <div className="content-home__grid-small">
                    {randomMovies.map((movie, index) => {
                        const randomColor = getRandomColor();
                        return (
                            <Link to={link} key={index} className="content-home__wrapper-small">
                                {movie.poster && movie.poster.previewUrl && (
                                    <img src={movie.poster.previewUrl} alt="Постер" className="content-home__img-small" />
                                )}
                                <div className="content-home__gradient"></div>
                                {movie.rating && movie.rating.kp && (
                                    <div className="content-home__rating-small-card" style={{ color: randomColor }}>
                                        {movie.rating ? movie.rating.kp.toFixed(1) : 'N/A'}
                                    </div>
                                )}
                                <h4 className="content-home__title-small-card">
                                    {movie.name || movie.alternativeName || 'Untitled'}
                                </h4>
                            </Link>
                        );
                    })}
                </div>
                <div className="content-home__button-wrapper">
                    <Link to={link} className="content-home__btn-show-all">Показать всё &#8594;</Link>
                </div>
            </div>
            <svg width="597" height="441" viewBox="0 0 597 441" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_126_1293)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M91.4997 223.499C90.4443 251.145 85.3777 280.281 114.07 303.667C143.512 327.664 192.434 348.97 246.908 350.166C299.306 351.317 331.466 321.496 378.361 309.471C414.906 300.1 465.111 304.511 490.141 287.795C515.293 270.998 504.504 247.071 503.804 225.695C503.121 204.808 500.068 184.834 486.131 165.192C467.334 138.702 460.048 102.96 409.47 92.7519C359.229 82.6121 312.015 110.602 261.412 119.838C213.141 128.649 153.265 125.338 120.105 145.568C86.3811 166.143 92.5357 196.361 91.4997 223.499Z" fill="url(#paint0_linear_126_1293)" />
                </g>
                <defs>
                    <filter id="filter0_f_126_1293" x="0.486206" y="0.570801" width="596.212" height="439.627" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_126_1293" />
                    </filter>
                    <linearGradient id="paint0_linear_126_1293" x1="90.6425" y1="219.171" x2="506.886" y2="221.388" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E2F026" />
                        <stop offset="0.465058" stopColor="#EC33CC" />
                        <stop offset="1" stopColor="#6906DD" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default MoviesSection;
