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

export default environmentHelper(process.env.EXPRESS_APP_ENV);
