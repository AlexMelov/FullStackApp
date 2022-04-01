import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'develop',
		environment: 'local'
	},
	baseUrl : 'http://localhost:3000',
	apiUrl: 'http://localhost:8000',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};

export default environment;
