import { useDispatch, useSelector } from 'react-redux';
import {
	completedTodo,
	deleteTodo,
	getTodoSate,
	undoCompletedTodo,
	undoDeleteTodo,
} from '../features/todo/slice';

export type TypeTodo = {
	title: string;
	id: number;
};
const TodoCard = ({ todo }: { todo: TypeTodo }) => {
	const dispatch = useDispatch();
	const { deleted, completed } = useSelector(getTodoSate);
	const todoAction = (type = '') => {
		type === 'delete'
			? dispatch(deleteTodo(todo.id))
			: type === 'undo_delete'
			? dispatch(undoDeleteTodo(todo.id))
			: type === 'completed'
			? dispatch(completedTodo(todo.id))
			: type === 'undo_completed'
			? dispatch(undoCompletedTodo(todo.id))
			: null;
	};
	return (
		<div className="card">
			<strong>Title : {todo.title}</strong>
			<div className="actions">
				{![...completed, ...deleted].includes(todo.id) && (
					<button onClick={() => todoAction('delete')}>Delete</button>
				)}
				{deleted.includes(todo.id) && (
					<button onClick={() => todoAction('undo_delete')}>
						Undo Deleted
					</button>
				)}
				{![...completed, ...deleted].includes(todo.id) && (
					<button onClick={() => todoAction('completed')}>Completed</button>
				)}
				{completed.includes(todo.id) && (
					<button onClick={() => todoAction('undo_completed')}>
						Undo Completed
					</button>
				)}
			</div>
		</div>
	);
};

export default TodoCard;
