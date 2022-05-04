import { Environment } from './environment.interface';

export const environment : Environment =
{
	metadata:
	{
		branch: 'develop',
		environment: 'local'
	},
	language:
	{
		availableLanguages: [ 'en', 'de', 'mk' ],
		defaultLanguages: 'en'
	},
	baseUrl : 'http://localhost:4200',
	apiUrl: 'http://localhost:8000',
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};

