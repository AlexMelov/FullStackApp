const environmentalStage =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	apiUrl: 'http://localhost:8000',
	apiProxy: 'http://127.0.0.1:8000',
	apiRoutes:
	{
		todos: '/todos'
	}
};

export default environmentalStage;
