import TodosContextProvider from './store/todos-context';
import NewTodo from './components/NewTodo';
import List from './components/List';
import React, { Fragment } from 'react';

const App : React.FC = () =>
{
	return (
		<Fragment>
			<TodosContextProvider>
				<NewTodo/>
				<List/>
			</TodosContextProvider>
		</Fragment>
	);
};

export default App;
