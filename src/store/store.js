import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import moviesReducer from './moviesSlice';
import submenuReducer from './submenuSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    submenu: submenuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
