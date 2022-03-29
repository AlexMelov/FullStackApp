import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'prod'
	},
	apiUrl: 'http://localhost:',
	apiPort: 8000,
	apiRoutes:
	{
		api: '/api',
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};

export default environment;
