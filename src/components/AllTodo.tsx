import { useGetAllTodoQuery } from '../features/todo/api';
type TypeTodo = {
	title: string;
};
const AllTodo = () => {
	const { data: allTodo } = useGetAllTodoQuery({});
	return (
		<>
			<div className="grid grid-col-3 gap">
				{allTodo?.map((todo: TypeTodo) => (
					<div className="card">{todo.title}</div>
				))}
			</div>
		</>
	);
};

export default AllTodo;
