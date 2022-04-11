// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.interface';

export const environment : Environment =
  {
    metadata:
      {
        branch: 'develop',
        environment: 'local'
      },
    baseUrl : 'http://localhost:3000',
    apiUrl: 'http://localhost:8000',
    apiRoutes:
      {
        todos: '/todos',
        todosWithId: '/todos/:todoId'
      }
  };

export default environment;
