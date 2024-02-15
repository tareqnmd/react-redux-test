import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllTodoQuery } from '../features/todo/api';
import { getTodoSate } from '../features/todo/slice';
import { TypeTodo } from './TodoCard';
import TodoListLayout from './TodoLayout';

const AllTodo = () => {
	const { data } = useGetAllTodoQuery({});
	const { deleted, completed } = useSelector(getTodoSate);
	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		data?.length > 0 &&
			setTodoList(
				data?.filter(
					(item: TypeTodo) => ![...completed, ...deleted].includes(item.id)
				)
			);
	}, [data, deleted, completed]);

	return (
		<TodoListLayout
			title={`Running Tasks(${todoList.length}) :`}
			todoList={todoList}
		/>
	);
};

export default AllTodo;
