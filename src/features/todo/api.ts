import { apiSlice } from '../api';

export const todoApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllTodo: builder.query({
			query: () => ({
				url: '/todos',
			}),
		}),
	}),
});

export const { useGetAllTodoQuery } = todoApi;
