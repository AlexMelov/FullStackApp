import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'dev'
	},
	apiUrl: 'http://localhost:8000',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId',
		register: '/api/register',
		login: '/api/login',
		userWithId: '/api/users/:userId'
	},
	mailer:
	{
		host: 'smtp.ethereal.email',
		port: 587,
		from :
		{
			name: 'Todo Application',
			email: 'info@todo-application.com'
		}
	}
};

export default environment;
