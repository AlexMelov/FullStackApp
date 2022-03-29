export interface Environment
{
	metadata :
	{
		branch : string;
		environment : string
	};
	apiUrl : string, apiPort : number;
	apiRoutes :
	{
		api: string;
		todos : string;
		todosWithId : string;
	}
}
