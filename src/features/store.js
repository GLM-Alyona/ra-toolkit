import { configureStore } from '@reduxjs/toolkit';
import factsReducer from './facts/slices/factsSlice';
import photosReducer from './photos/slices/photosSlice';

export const store = configureStore({
  reducer: {
    facts: factsReducer,
    photos: photosReducer,
  },
});