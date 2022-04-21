import { Environment } from './environment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'prod'
	},
	baseUrl : 'http://localhost:4200',
	apiUrl: 'https://todos-dev.vercel.app/api/todos',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};
