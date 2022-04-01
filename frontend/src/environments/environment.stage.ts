import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	baseUrl : 'http://localhost:3000',
	apiUrl: 'https://full-stack-a3sgu4q5h-alexmelov.vercel.app',
	apiRoutes:
	{
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId'
	}
};

export default environment;
