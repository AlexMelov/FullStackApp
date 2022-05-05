export interface Environment
{
	metadata :
	{
		branch : string;
		environment : string
	};
	apiUrl : string;
	apiPort : number;
	apiRoutes :
	{
		todos : string;
		todosWithId : string;
		register : string;
		login : string;
	}
}
