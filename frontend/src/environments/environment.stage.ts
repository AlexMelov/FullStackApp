import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	apiUrl: 'https://full-stack-a3sgu4q5h-alexmelov.vercel.app',
	apiPort: null,
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
