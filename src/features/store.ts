import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	devTools: import.meta.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares().concat(apiSlice.middleware),
});
