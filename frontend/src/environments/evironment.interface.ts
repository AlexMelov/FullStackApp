export interface Environment
{
	metadata :
	{
		branch : string;
		environment : string
	};
	apiUrl : string;
	apiPort : number;
	baseUrl : string;
	basePort : number
	apiRoutes :
	{
		api : string;
		todos : string;
		todosWithId : string;
	}
}
