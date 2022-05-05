
export interface Environment
{
	metadata :
	{
		branch : string;
		environment : string
	};
	language :
	{
		availableLanguages : string[],
		defaultLanguages : string
	}
	baseUrl : string;
	apiUrl : string;
	apiRoutes :
	{
		todos : string;
		todosWithId : string;
	},
	pageRoutes :
	{
		register : string,
		login : string
	}
}
