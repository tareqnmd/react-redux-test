import AllTodo from './components/AllTodo';
import CompletedTodo from './components/CompletedTodo';
import DeletedTask from './components/DeletedTask';

const App = () => {
	return (
		<div className="grid grid-col-3 gap-1">
			<AllTodo />
			<CompletedTodo />
			<DeletedTask />
		</div>
	);
};

export default App;
