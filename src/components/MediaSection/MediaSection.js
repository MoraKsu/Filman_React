import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MediaSection.css';
import { fetchUserPositiveReview } from '../../api/kinopoiskApi';
import newsImage1 from '../../img/news1.jpg';
import newsImage2 from '../../img/news2.jpg';
import newsImage3 from '../../img/news3.jpg';

const getRandomReviews = (reviews, num) => {
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

const MediaSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const addReviewsToPage = async () => {
            try {
                const data = await fetchUserPositiveReview();
                const randomReviews = getRandomReviews(data.docs, 3);
                setReviews(randomReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        addReviewsToPage();
    }, []);

    return (
        <div className="media container_midle center_midle">
            <div className="media__news">
                <svg className="media__svg" width="597" height="441" viewBox="0 0 597 441" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_126_1379)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M91.5506 223.505C90.4952 251.152 85.4286 280.287 114.121 303.673C143.563 327.67 192.485 348.976 246.959 350.172C299.357 351.323 331.517 321.502 378.412 309.477C414.957 300.106 465.162 304.518 490.192 287.801C515.344 271.004 504.555 247.077 503.855 225.702C503.172 204.814 500.119 184.84 486.182 165.199C467.384 138.708 460.099 102.966 409.521 92.7583C359.28 82.6184 312.066 110.608 261.463 119.845C213.192 128.655 153.316 125.344 120.156 145.575C86.432 166.149 92.5866 196.367 91.5506 223.505Z" fill="url(#paint0_linear_126_1379)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_126_1379" x="0.537109" y="0.577148" width="596.212" height="439.628" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_126_1379" />
                        </filter>
                        <linearGradient id="paint0_linear_126_1379" x1="90.6934" y1="219.177" x2="506.937" y2="221.395" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E2F026" />
                            <stop offset="0.465058" stopColor="#EC33CC" />
                            <stop offset="1" stopColor="#6906DD" />
                        </linearGradient>
                    </defs>
                </svg>
                <h2 className="media__news_txt">Новости</h2>
                <div className="media__news_grid-container">
                    <div className="media__news_box">
                        <Link to="#" className="media__news_card-link">
                            <img src={newsImage1} alt="Новости" className="media__news_img-small" />
                            <button className="media__news_btn-read">Читать</button>
                        </Link>
                        <h5 className="media__news_title">Стал доступен новый трейлер сериала «Дюна: Пророчество»</h5>
                        <p className="media__news_date"><time dateTime="2001.05.15">19.07.2024</time></p>
                        <p className="media__news_author"><cite>Новости</cite></p>
                        <p className="media__news_desc">HBO выпустил второй тизер-трейлер сериала «Дюна: Пророчество». Премьера шоу состоится в ноябре.</p>
                    </div>
                    <div className="media__news_box">
                        <Link to="#" className="media__news_card-link">
                            <img src={newsImage2} alt="Новости" className="media__news_img-small" />
                            <button className="media__news_btn-read">Читать</button>
                        </Link>
                        <h5 className="media__news_title">«Битлджус Битлджус» получил новый трейлер</h5>
                        <p className="media__news_date"><time dateTime="2001.05.15">19.07.2024</time></p>
                        <p className="media__news_author"><cite>Новости</cite></p>
                        <p className="media__news_desc">Студия Warner Bros. опубликовала второй трейлер фильма «Битлджус Битлджус». Продолжение мистической комедии Тима Бёртона выходит в прокат в сентябре.</p>
                    </div>
                    <div className="media__news_box">
                        <Link to="#" className="media__news_card-link">
                            <img src={newsImage3} alt="Новости" className="media__news_img-small" />
                            <button className="media__news_btn-read">Читать</button>
                        </Link>
                        <h5 className="media__news_title">Шарлиз Терон намекнула на скорый выход сиквела «Бессмертной гвардии»</h5>
                        <p className="media__news_date"><time dateTime="2001.05.15">19.07.2024</time></p>
                        <p className="media__news_author"><cite>Новости</cite></p>
                        <p className="media__news_desc">Актриса Шарлиз Терон рассказала о статусе подготовки фильма «Бессмертная гвардия 2». По словам Терон, продолжение фэнтези-боевика было отложено на фоне прошлогодних забастовок.</p>
                    </div>
                    <div className="media__news_button-wrapper">
                        <Link to="#" className="media__news_btn-show-all">Показать всё &#8594;</Link>
                    </div>
                </div>
            </div>
            <div className="media__forum">
                <svg className="media__forum_svg" width="597" height="441" viewBox="0 0 597 441" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_126_1379)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M91.5506 223.505C90.4952 251.152 85.4286 280.287 114.121 303.673C143.563 327.67 192.485 348.976 246.959 350.172C299.357 351.323 331.517 321.502 378.412 309.477C414.957 300.106 465.162 304.518 490.192 287.801C515.344 271.004 504.555 247.077 503.855 225.702C503.172 204.814 500.119 184.84 486.182 165.199C467.384 138.708 460.099 102.966 409.521 92.7583C359.28 82.6184 312.066 110.608 261.463 119.845C213.192 128.655 153.316 125.344 120.156 145.575C86.432 166.149 92.5866 196.367 91.5506 223.505Z" fill="url(#paint0_linear_126_1379)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_126_1379" x="0.537109" y="0.577148" width="596.212" height="439.628" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="45" result="effect1_foregroundBlur_126_1379" />
                        </filter>
                        <linearGradient id="paint0_linear_126_1379" x1="90.6934" y1="219.177" x2="506.937" y2="221.395" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E2F026" />
                            <stop offset="0.465058" stopColor="#EC33CC" />
                            <stop offset="1" stopColor="#6906DD" />
                        </linearGradient>
                    </defs>
                </svg>
                <h2 className="media__forum_txt">Отзывы</h2>
                <div className="media__forum_grid-container">
                    {reviews.map((review, index) => (
                        <div key={index} className="media__forum_box">
                            <svg className="media__forum_svg-kov" width="95" height="79" viewBox="0 0 95 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.3717 0L24.639 56.5742L20.5749 37.4613C26.5018 37.4613 31.4127 39.3301 35.3075 43.0677C39.2023 46.8054 41.1497 51.8172 41.1497 58.1032C41.1497 64.3892 39.2023 69.486 35.3075 73.3935C31.4127 77.1312 26.5865 79 20.8289 79C14.7326 79 9.73707 77.0462 5.84224 73.1387C1.94741 69.2312 0 64.2194 0 58.1032C0 56.0645 0.084671 54.1957 0.254011 52.4968C0.592692 50.628 1.18538 48.4193 2.03209 45.871C2.87879 43.3226 4.06417 40.0946 5.58823 36.1871L19.0508 0H39.3717ZM93.2219 0L78.4893 56.5742L74.4251 37.4613C80.352 37.4613 85.2629 39.3301 89.1578 43.0677C93.0526 46.8054 95 51.8172 95 58.1032C95 64.3892 93.0526 69.486 89.1578 73.3935C85.2629 77.1312 80.4367 79 74.6791 79C68.5829 79 63.5873 77.0462 59.6925 73.1387C55.7977 69.2312 53.8503 64.2194 53.8503 58.1032C53.8503 56.0645 53.9349 54.1957 54.1043 52.4968C54.443 50.628 55.0357 48.4193 55.8824 45.871C56.7291 43.3226 57.9144 40.0946 59.4385 36.1871L72.9011 0H93.2219Z" fill="#1DC4EE"/>
                            </svg>
                            <Link to="#" className="media__forum_card-link">
                                <button className="media__forum_btn-read">Читать</button>
                                <div className="media__forum_card-content">
                                    <h5 className="media__forum_title">{review.title}</h5>
                                    <p className="media__forum_date"><time dateTime={new Date(review.date).toISOString()}>{new Date(review.date).toLocaleDateString()}</time></p>
                                    <p className="media__forum_author"><cite>{review.author}</cite></p>
                                    <p className="media__forum_desc">{truncateText(review.review, 200)}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className="media__forum_button-wrapper">
                        <Link to="#" className="media__forum_btn-show-all">Показать всё &#8594;</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;
