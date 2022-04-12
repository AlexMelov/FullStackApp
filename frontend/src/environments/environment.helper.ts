import { Environment } from './environment.interface';
import { environment as environmentLocal } from './environment';
import { environment as environmentDev } from './environment.dev';
import { environment as environmentStage } from './environment.stage';
import { environment as environmentProd } from './environment.prod';

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

export default environmentHelper(process.env['APP_ENV']) as Environment;
