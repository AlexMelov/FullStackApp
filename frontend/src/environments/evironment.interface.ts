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
	apiRoutes :
	{
		todos : string;
		todosWithId : string;
	}
}
