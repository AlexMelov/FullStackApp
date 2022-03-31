import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'develop',
		environment: 'local'
	},
	apiUrl: 'http://localhost',
	apiPort: 8000,
	baseUrl : 'http://localhost',
	basePort : 3000,
	apiRoutes:
	{
		api: '/api',
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};

export default environment;
