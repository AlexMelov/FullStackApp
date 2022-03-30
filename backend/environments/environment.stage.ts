import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	apiUrl: 'http://localhost',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId'
	}
};

export default environment;
