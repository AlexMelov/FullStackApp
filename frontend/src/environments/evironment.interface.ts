export interface Environment
{
	metadata :
	{
		branch : string;
		environment : string
	};
	apiUrl : string;
	apiRoutes :
	{
		todos : string;
		todosWithId : string;
	}
}
