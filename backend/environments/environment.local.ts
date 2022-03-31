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
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId'
	}
};

export default environment;
