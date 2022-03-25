type environmentStageObj ={
	metadata : {branch : string, environment : string}
, apiUrl : string, apiPort : number, apiRoutes : {todos : string, todosWithId : string}}

const environmentalStage : environmentStageObj =
{
	metadata:
	{
		branch: 'master',
		environment: 'stage'
	},
	apiUrl: 'http://localhost:',
	apiPort: 8000,
	apiRoutes:
	{
		todos: '/api/todos',
		todosWithId: '/api/todos/:todoId'
	}
};

export default environmentalStage;
