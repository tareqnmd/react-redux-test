import TodoCard, { TypeTodo } from './TodoCard';

const TodoListLayout = ({
	title,
	todoList,
}: {
	title: string;
	todoList: TypeTodo[];
}) => {
	return (
		<div>
			<h2>{title}</h2>
			<div className="grid grid-col-1 gap-1">
				{todoList?.map((todo: TypeTodo) => (
					<TodoCard
						key={todo.id}
						todo={todo}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoListLayout;
