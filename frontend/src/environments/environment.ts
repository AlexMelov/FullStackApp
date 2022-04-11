import environmentLocal from './environment.local';
import environmentDev from './environment.dev';
import environmentStage from './environment.stage';
import environmentProd from './environment.prod';
import { Environment } from './evironment.interface';

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

export default environmentHelper(process.env.ANGULAR_APP_ENV) as Environment;
