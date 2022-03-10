export const environmentHelper = environment =>
{
	if (environment === 'dev')
	{
		return require('./environment.dev.js');
	}
	if (environment === 'stage')
	{
		return require('./environment.stage.ts');
	}
	if (environment === 'prod')
	{
		return require('./environment.prod.js');
	}
};

export const environment = environmentHelper(process.env.REACT_APP_ENV);

export default environment;
