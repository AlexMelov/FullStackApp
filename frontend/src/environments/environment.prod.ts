import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'prod'
	},
	apiUrl: 'https://full-stack-a3sgu4q5h-alexmelov.vercel.app',
	apiPort: null,
	apiRoutes:
	{
		api: '/api',
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};

export default environment;
