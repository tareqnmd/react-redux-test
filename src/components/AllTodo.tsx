import { useGetAllTodoQuery } from '../features/todo/api';

const AllTodo = () => {
	const { data } = useGetAllTodoQuery({});
	console.log('allTodo', data);
	return (
		<>
			asd
			{/* {allTodo?.map((todo: any) => (
				<></>
			))} */}
		</>
	);
};

export default AllTodo;
