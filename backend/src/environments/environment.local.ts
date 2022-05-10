import { Environment } from './evironment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'develop',
		environment: 'local'
	},
	apiUrl: 'http://localhost:8000',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId',
		register: '/register',
		login: '/login',
		userWithId: '/users/:userId'
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
