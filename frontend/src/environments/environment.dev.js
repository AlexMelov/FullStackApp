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
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId'
	}
};
