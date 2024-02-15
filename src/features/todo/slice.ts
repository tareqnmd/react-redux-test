import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';

type TodoType = {
	completed: number[];
	deleted: number[];
};

const initialState: TodoType = {
	completed: [],
	deleted: [],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		completedTodo: (state, action) => {
			state.completed.push(action.payload);
		},
		undoCompletedTodo: (state, action) => {
			state.completed = state.completed.filter(
				(todoId) => todoId !== action.payload
			);
		},
		deleteTodo: (state, action) => {
			state.deleted.push(action.payload);
		},
		undoDeleteTodo: (state, action) => {
			state.deleted = state.deleted.filter(
				(todoId) => todoId !== action.payload
			);
		},
	},
});

export const { completedTodo, undoCompletedTodo, deleteTodo, undoDeleteTodo } =
	todoSlice.actions;

export const getTodoSate = (state: AppState): typeof initialState => state.todo;
export default todoSlice;
