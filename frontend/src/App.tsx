import TodosContextProvider from './store/todos-context';
import NewTodo from './components/NewTodo';
import List from './components/List';

function App() {
	return (
		<div className="App">
			<TodosContextProvider>
				<NewTodo />
				<List />
			</TodosContextProvider>
		</div>
	);
}

export default App;
