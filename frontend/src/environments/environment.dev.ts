import { Environment } from './environment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'dev'
	},
	baseUrl : 'https://todos-dev.vercel.app',
	apiUrl: 'https://todos-dev.vercel.app/api',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};
