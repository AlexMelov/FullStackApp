module.exports =
{
	metadata:
    {
    	branch: 'develop',
    	environment: 'dev'
    },
	apiUrl: 'http://localhost',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/todos',
		todosWithId: '/todos/:todoId'
	}
};
