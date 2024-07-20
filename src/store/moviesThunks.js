import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies, fetchTop250Movies, fetchCartoons, fetchSerials } from '../api/kinopoiskApi';

export const fetchPopularMoviesThunk = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const response = await fetchPopularMovies();
    return response;
  }
);

export const fetchTop250MoviesThunk = createAsyncThunk(
  'movies/fetchTop250Movies',
  async () => {
    const response = await fetchTop250Movies();
    return response;
  }
);

export const fetchCartoonsThunk = createAsyncThunk(
  'movies/fetchCartoons',
  async () => {
    const response = await fetchCartoons();
    return response;
  }
);

export const fetchSerialsThunk = createAsyncThunk(
  'movies/fetchSerials',
  async () => {
    const response = await fetchSerials();
    return response;
  }
);

