import TodosContextProvider from './store/todos-context';
import NewTodo from './components/NewTodo';
import List from './components/List';

function App() {
	return (
		<>
			<TodosContextProvider>
				<NewTodo />
				<List />
			</TodosContextProvider>
		</>
	);
}

export default App;
