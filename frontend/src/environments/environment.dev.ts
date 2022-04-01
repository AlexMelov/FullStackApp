import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'dev'
	},
	baseUrl : 'https://todos-dev.vercel.app',
	apiUrl: 'https://full-stack-a3sgu4q5h-alexmelov.vercel.app/api',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};

export default environment;
