import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'develop',
		environment: 'local'
	},
	apiUrl: 'http://localhost:8000',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId',
		register: '/register',
		login: '/login',
		apiWithId: '/register/:userId'
	}
};

export default environment;
