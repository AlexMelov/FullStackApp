import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	apiUrl: 'http://localhost:8000',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId',
		register: '/register',
		login: '/login'
	}
};

export default environment;
