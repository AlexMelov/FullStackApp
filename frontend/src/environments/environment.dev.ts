import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'dev'
	},
	apiUrl: 'https://full-stack-a3sgu4q5h-alexmelov.vercel.app',
	apiPort: 80,
	apiRoutes:
	{
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId'
	}
};

export default environment;
