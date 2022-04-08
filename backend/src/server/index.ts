import { server, db } from '../server.js';
import environment from '../environments/environment.js';

db.then(() =>
{
	process.stdout.write('[' + environment.metadata.environment.toUpperCase() + '] CONNECTION TO DATABASED SUCCEED');
	server.listen(environment.apiPort);
})
.catch(() =>
{
	process.stdout.write('[' + environment.metadata.environment.toUpperCase() + '] CONNECTION TO DATABASE FAILED');
	process.exit();
});
