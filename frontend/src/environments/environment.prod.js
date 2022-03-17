module.exports =
{
	metadata:
	{
		branch: 'master',
		environment: 'prod'
	},
	apiUrl: 'http://localhost',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};
