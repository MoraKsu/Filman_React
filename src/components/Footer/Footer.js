import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import searchIcon from '../../img/Search.svg';
import logo from '../../img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__box container_midle center_midle">
                <div className="footer__box-links">
                    <div className="footer__box-links_left">
                        <div className="footer__wrapper">
                            <h2 className="footer__title">Фильмы</h2>
                            <ul className="footer__items">
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Комедия</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Драма</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Боевики</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Триллеры</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__wrapper">
                            <h2 className="footer__title">Мультфильмы</h2>
                            <ul className="footer__items">
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Анимэ</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Детские</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__wrapper">
                            <h2 className="footer__title">Сериалы</h2>
                            <ul className="footer__items">
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Турецкие</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Корейские</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Российские</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">США</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__wrapper">
                            <Link to="#" className="footer__link"><h2 className="footer__title">Форум</h2></Link>
                        </div>
                        <div className="footer__wrapper">
                            <Link to="#" className="footer__link"><h2 className="footer__title">Новости</h2></Link>
                        </div>
                    </div>
                    <div className="footer__box-links_right">
                        <form className="footer__search_box">
                            <input className="footer__search_input" type="text" placeholder="Поиск" />
                            <button className="footer__search_button" type="submit">
                                <img src={searchIcon} className="footer__search_img" alt="Поиск" />
                            </button>
                        </form>
                        <div className="footer__wrapper">
                            <ul className="footer__items">
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">FAQ</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Политика конфиденциальности</Link>
                                </li>
                                <li className="footer__item">
                                    <Link to="#" className="footer__link">Правила пользования</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__box-soc">
                    <Link to="/Filman_React" className="footer__logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <div className="footer__soc">
                        <p className="footer__txt">Социальные сети</p>
                        <div className="footer__soc_links">
                            <a href="https://vk.com/moraksu" className="footer__soc_vk">
                                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_125_1281)">
                                    <path d="M0 25.3272C0 13.3878 0 7.41816 3.70908 3.70908C7.41816 0 13.3878 0 25.3272 0H27.4378C39.3772 0 45.3468 0 49.0559 3.70908C52.765 7.41816 52.765 13.3878 52.765 25.3272V27.4378C52.765 39.3772 52.765 45.3468 49.0559 49.0559C45.3468 52.765 39.3772 52.765 27.4378 52.765H25.3272C13.3878 52.765 7.41816 52.765 3.70908 49.0559C0 45.3468 0 39.3772 0 27.4378V25.3272Z" fill="#0077FF" />
                                    <path d="M27.9848 37.9904C15.7259 37.9904 8.73373 29.6716 8.44238 15.8291H14.583C14.7847 25.9891 19.3117 30.2927 22.8974 31.1801V15.8291H28.6797V24.5916C32.2207 24.2145 35.9405 20.2214 37.1955 15.8291H42.9777C42.014 21.2419 37.98 25.2349 35.1114 26.8765C37.98 28.2075 42.5745 31.6903 44.3226 37.9904H37.9576C36.5905 33.7755 33.1844 30.5146 28.6797 30.0709V37.9904H27.9848Z" fill="white" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_125_1281">
                                        <rect width="52.765" height="52.765" fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://t.me/moraksu" className="footer__soc_telegram">
                                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_125_1282)">
                                    <path d="M27.1475 52.765C41.7181 52.765 53.53 40.9531 53.53 26.3825C53.53 11.8118 41.7181 0 27.1475 0C12.5769 0 0.765015 11.8118 0.765015 26.3825C0.765015 40.9531 12.5769 52.765 27.1475 52.765Z" fill="url(#paint0_linear_125_1282)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7073 26.104C20.3983 22.7531 25.5268 20.544 28.0929 19.4767C35.4196 16.4293 36.9421 15.8999 37.9343 15.8824C38.1526 15.8786 38.6406 15.9327 38.9567 16.1892C39.2236 16.4057 39.297 16.6983 39.3321 16.9036C39.3673 17.109 39.411 17.5767 39.3763 17.9422C38.9792 22.1139 37.2613 32.2375 36.3873 36.9099C36.0174 38.8869 35.2892 39.5498 34.5843 39.6147C33.0522 39.7557 31.8888 38.6022 30.4049 37.6295C28.0829 36.1074 26.7711 35.1599 24.5172 33.6746C21.9124 31.9581 23.601 31.0147 25.0854 29.4728C25.4739 29.0693 32.2243 22.9293 32.355 22.3724C32.3713 22.3027 32.3865 22.043 32.2322 21.9059C32.0779 21.7688 31.8503 21.8157 31.686 21.853C31.4531 21.9058 27.7437 24.3576 20.5577 29.2084C19.5048 29.9314 18.5511 30.2836 17.6966 30.2652C16.7546 30.2448 14.9426 29.7326 13.5956 29.2947C11.9434 28.7576 10.6302 28.4737 10.7446 27.5616C10.8041 27.0865 11.4583 26.6006 12.7073 26.104Z" fill="white" />
                                    </g>
                                    <defs>
                                    <linearGradient id="paint0_linear_125_1282" x1="27.1475" y1="0" x2="27.1475" y2="52.3736" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2CA4E0" />
                                        <stop offset="1" stopColor="#0D83BF" />
                                    </linearGradient>
                                    <clipPath id="clip0_125_1282">
                                        <rect width="52.765" height="52.765" fill="white" transform="translate(0.765015)" />
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__svg">
                <svg width="248" height="348" viewBox="0 0 248 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_125_1288)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M120.104 399.328C184.498 366.902 151.951 300.525 119.432 235.945C77.869 153.406 51.946 59.0887 -30.3562 100.533C-113.379 142.339 -118.057 244.13 -76.1305 327.391C-43.1477 392.891 54.7923 432.216 120.104 399.328Z" fill="url(#paint0_linear_125_1288)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_125_1288" x="-192.043" y="0.44043" width="439.167" height="500.734" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_125_1288" />
                        </filter>
                        <linearGradient id="paint0_linear_125_1288" x1="178.566" y1="381.304" x2="28.106" y2="82.5086" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1AECDF" />
                            <stop offset="0.545062" stopColor="#1761DA" />
                            <stop offset="1" stopColor="#EC33CC" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg width="448" height="163" viewBox="0 0 448 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_125_1287)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M352.783 204.417C356.424 182.621 362.766 159.985 347.106 139.048C331.037 117.564 302.339 96.5639 267.961 91.0144C234.895 85.6765 211.317 106.566 180.319 112.124C156.163 116.454 124.836 108.72 107.183 119.839C89.4447 131.011 93.7067 150.863 91.8513 167.844C90.0382 184.437 89.8246 200.507 96.5411 217.233C105.6 239.791 106.371 268.701 137.312 281.055C168.046 293.327 200.962 275.159 234.009 272.122C265.533 269.226 303.104 276.906 326.284 263.693C349.859 250.255 349.209 225.813 352.783 204.417Z" fill="url(#paint0_linear_125_1287)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_125_1287" x="0.76355" y="0.149414" width="446.421" height="375.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_125_1287" />
                        </filter>
                        <linearGradient id="paint0_linear_125_1287" x1="352.861" y1="207.916" x2="89.436" y2="170.993" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E2F026" />
                            <stop offset="0.465058" stopColor="#EC33CC" />
                            <stop offset="1" stopColor="#6906DD" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg width="261" height="265" viewBox="0 0 261 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_125_1289)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M261.006 406.429C286.065 402.92 312.103 399.779 332.362 384.637C351.754 370.142 355.59 343.353 370.696 324.442C389.187 301.292 432.207 290.773 430.974 261.183C429.719 231.057 384.041 224.724 365.548 200.893C350.439 181.423 350.491 153.567 333.562 135.652C313.635 114.564 289.854 87.0081 261.006 90.2638C231.334 93.6125 218.871 130.362 197.337 151.026C181.143 166.565 165.413 180.948 149.752 197.022C129.004 218.316 89.4052 231.474 90.0068 261.183C90.6132 291.132 136.91 298.166 152.321 323.863C167.349 348.924 153.804 388.698 177.083 406.382C199.735 423.591 232.823 410.376 261.006 406.429Z" fill="url(#paint0_linear_125_1289)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_125_1289" x="0" y="0" width="521" height="505" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_125_1289" />
                        </filter>
                        <linearGradient id="paint0_linear_125_1289" x1="260.5" y1="415" x2="260.5" y2="90" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E2F026" />
                            <stop offset="1" stopColor="#1AECDF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
