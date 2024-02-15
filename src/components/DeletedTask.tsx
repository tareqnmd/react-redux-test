import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllTodoQuery } from '../features/todo/api';
import { getTodoSate } from '../features/todo/slice';
import { TypeTodo } from './TodoCard';
import TodoListLayout from './TodoLayout';

const DeletedTask = () => {
	const { data } = useGetAllTodoQuery({});
	const { deleted } = useSelector(getTodoSate);
	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		data?.length > 0 &&
			setTodoList(data?.filter((item: TypeTodo) => deleted.includes(item.id)));
	}, [data, deleted]);
	return (
		<TodoListLayout
			title={`Deleted Tasks(${todoList.length}) :`}
			todoList={todoList}
		/>
	);
};

export default DeletedTask;
