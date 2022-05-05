import { Environment } from './environment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	language:
	{
		availableLanguages: [ 'en', 'de', 'mk' ],
		defaultLanguages: 'en'
	},
	baseUrl : 'https://todos-stage.vercel.app',
	apiUrl: 'https://todos-stage.vercel.app/api',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	},
	pageRoutes:
	{
		register: '/register',
		login: '/login'
	}
};
