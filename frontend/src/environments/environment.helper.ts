import { environment as environmentLocal } from './environment';
import { environment as environmentDev } from './environment.dev';
import { environment as environmentStage } from './environment.stage';
import { environment as environmentProd } from './environment.prod';
import { Environment } from './environment.interface';

export const environmentHelper : Function = (environment : string) : Environment | void =>
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
