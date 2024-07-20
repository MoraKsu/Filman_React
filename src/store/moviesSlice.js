import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies, fetchTop250Movies, fetchCartoons, fetchSerials, searchMovies, searchMoviesByTitle } from '../api/kinopoiskApi';

export const fetchPopularMoviesThunk = createAsyncThunk('movies/fetchPopularMovies', async () => {
  const response = await fetchPopularMovies();
  return response;
});

export const fetchTop250MoviesThunk = createAsyncThunk('movies/fetchTop250Movies', async () => {
  const response = await fetchTop250Movies();
  return response;
});

export const fetchCartoonsThunk = createAsyncThunk('movies/fetchCartoons', async () => {
  const response = await fetchCartoons();
  return response;
});

export const fetchSerialsThunk = createAsyncThunk('movies/fetchSerials', async () => {
  const response = await fetchSerials();
  return response;
});

export const searchMoviesThunk = createAsyncThunk('movies/searchMovies', async (searchParams) => {
  const response = await searchMovies(searchParams);
  return response;
});

export const searchMoviesByTitleThunk = createAsyncThunk('movies/searchMoviesByTitle', async (title) => {
  const response = await searchMoviesByTitle(title);
  return response;
});

const initialState = {
  popular: [],
  top250: [],
  cartoons: [],
  serials: [],
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMoviesThunk.fulfilled, (state, action) => {
        state.popular = action.payload;
      })
      .addCase(fetchTop250MoviesThunk.fulfilled, (state, action) => {
        state.top250 = action.payload;
      })
      .addCase(fetchCartoonsThunk.fulfilled, (state, action) => {
        state.cartoons = action.payload;
      })
      .addCase(fetchSerialsThunk.fulfilled, (state, action) => {
        state.serials = action.payload;
      })
      .addCase(searchMoviesThunk.fulfilled, (state, action) => {
        // Handle search movies result
      })
      .addCase(searchMoviesByTitleThunk.fulfilled, (state, action) => {
        // Handle search movies by title result
      });
  },
});

export default moviesSlice.reducer;
