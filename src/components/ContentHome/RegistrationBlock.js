import React, { useEffect } from 'react';
import './RegistrationBlock.css';
import registrationBg1 from '../../img/registration_bg1.png';
import registrationBg2 from '../../img/registration_bg2.png';
import registrationBg3 from '../../img/registration_bg3.png';
import registrationBg4 from '../../img/registration_bg4.png';

const RegistrationBlock = () => {
    useEffect(() => {
        const bgImages = [registrationBg1, registrationBg2, registrationBg3, registrationBg4];

        const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];

        const bgImageElement = document.querySelector('.content-home__registr-bg');
        if (bgImageElement) {
            bgImageElement.src = randomImage;
        } else {
            console.error('Element with class content-home__registr-bg not found');
        }

        const formBoxElement = document.querySelector('.content-home__form-box');
        if (formBoxElement) {
            formBoxElement.innerHTML = `
                <h3 class="content-home__counter-user"></h3>
                <p class="content-home__txt-counter">Счастливых пользователей</p>
                <button class="content-home__txt-btn" type="submit">Регистрируйся</button>
                <a href="#" class="content-home__register-link">Уже с нами? <span>Войти</span></a>
            `;
        } else {
            console.error('Element with class content-home__form-box not found');
        }

        const counterUserElement = document.querySelector('.content-home__counter-user');
        if (counterUserElement) {
            const registeredUsers = Math.floor(Math.random() * 10000) + 1000;
            counterUserElement.textContent = registeredUsers.toLocaleString();
        } else {
            console.error('Element with class content-home__counter-user not found');
        }
    }, []);

    return (
        <div className="content-home__registr">
            <img src="" alt="BackgroundImage" className="content-home__registr-bg" />
            <div className="content-home__form-box">
            </div>
        </div>
    );
};

export default RegistrationBlock;
