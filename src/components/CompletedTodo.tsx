import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllTodoQuery } from '../features/todo/api';
import { getTodoSate } from '../features/todo/slice';
import { TypeTodo } from './TodoCard';
import TodoListLayout from './TodoLayout';

const CompletedTodo = () => {
	const { data } = useGetAllTodoQuery({});
	const { completed } = useSelector(getTodoSate);
	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		data?.length > 0 &&
			setTodoList(
				data?.filter((item: TypeTodo) => completed.includes(item.id))
			);
	}, [data, completed]);

	return (
		<TodoListLayout
			title={`Completed Tasks(${todoList.length}) :`}
			todoList={todoList}
		/>
	);
};

export default CompletedTodo;
