import React from 'react';
import './ButtonUp.css';

const ButtonUp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="button-up" onClick={scrollToTop}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.3338 20.6655C26.3338 20.4922 26.2898 20.3175 26.1952 20.1575C25.5992 19.1522 20.2552 10.3335 16.0005 10.3335C11.7472 10.3335 6.40183 19.1508 5.80583 20.1575C5.52449 20.6308 5.68183 21.2468 6.15783 21.5268C6.63383 21.8082 7.24716 21.6508 7.52849 21.1762C9.55383 17.7575 13.6445 12.3335 16.0005 12.3335C18.3605 12.3335 22.4498 17.7575 24.4725 21.1762C24.7538 21.6508 25.3672 21.8082 25.8432 21.5268C26.1578 21.3402 26.3338 21.0082 26.3338 20.6655" fill="#1761DA" />
      </svg>
    </button>
  );
};

export default ButtonUp;