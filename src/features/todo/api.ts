import { apiSlice } from '../api';

export const todoApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllTodo: builder.query({
			query: () => ({
				url: '/todos?_page=1',
			}),
		}),
	}),
});

export const { useGetAllTodoQuery } = todoApi;
