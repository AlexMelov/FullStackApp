import { Environment } from './evironment.interface.js';
import environmentLocal from './environment.local.js';
import environmentDev from './environment.dev.js';
import environmentStage from './environment.stage.js';
import environmentProd from './environment.prod.js';

export const environmentHelper : Function = (environment : string) : Environment =>
{
	if (environment === 'local')
	{
		return environmentLocal;
	}
	if (environment === 'dev')
	{
		return environmentDev;
	}
	if (environment === 'stage')
	{
		return environmentStage;
	}
	if (environment === 'prod')
	{
		return environmentProd;
	}
};

export default environmentHelper(process.env.EXPRESS_APP_ENV) as Environment;
