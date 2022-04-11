export interface Environment
{
  metadata :
    {
      branch : string;
      environment : string
    };
  baseUrl : string;
  apiUrl : string;
  apiRoutes :
    {
      todos : string;
      todosWithId : string;
    }
}
