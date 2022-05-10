import { Environment } from './environment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'dev'
	},
	language:
	{
		availableLanguages: [ 'en', 'de', 'mk' ],
		defaultLanguages: 'en'
	},
	baseUrl : 'https://todos-dev.vercel.app',
	apiUrl: 'https://todos-dev.vercel.app/api',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId',
		register: '/register',
		login: '/login'
	},
	pageRoutes:
	{
		todos: 'todos',
		register: 'register',
		login: 'login'
	}
};
