import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/kinopoiskApi';
import './BannerHome.css';
import SideBar from '../SideBar/SideBar';

const BannerHome = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const moviesData = await fetchPopularMovies();
        console.log('Fetched Movies Data:', moviesData);

        if (moviesData && moviesData.length > 0) {
          const randomMovie = moviesData[Math.floor(Math.random() * moviesData.length)];
          setMovie(randomMovie);
        } else {
          throw new Error("No movies found");
        }
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPopularMovie();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>No movie data available</div>;
  }

  const moviePoster = movie.poster ? movie.poster.previewUrl : '';
  const movieTitle = movie.name || movie.alternativeName || 'Untitled';
  const movieRating = movie.rating ? movie.rating.kp.toFixed(1) : 'N/A';
  const movieCountry = movie.countries ? movie.countries.map(country => country.name).join(', ') : '';
  const movieYear = movie.year;
  const movieGenre = movie.genres ? movie.genres.map(genre => genre.name).join(', ') : '';
  const movieDescription = movie.description || 'No description available';

  return (
    <div className="banner-container">
      {moviePoster && (
        <img src={moviePoster} alt="Banner" className="banner-image" />
      )}
      <div className="movie-info__rating">{movieRating}</div>
      <div className="movie-info container_midle center_midle">
        <div className="movie-info__wrap">
          {moviePoster && (
            <img src={moviePoster} alt="Poster" className="movie-info__poster" />
          )}
          <div className="movie-info__box">
            <h1 className="movie-info__title">{movieTitle}</h1>
            <div className="movie-info__desc">
              <div className="movie-info__year">
                <span>{movieYear}</span>
              </div>
              <div className="movie-info__genre">
                <span>{movieGenre}</span>
              </div>
              <div className="movie-info__country">
                <span>{movieCountry}</span>
              </div>
            </div>
            <p className="movie-info__about">{movieDescription}</p>
            <Link to="#" className="movie-info__btn">К фильму</Link>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default BannerHome;