const environmentHelper : Function = (environment : string) =>
{
	if (environment === 'dev')
	{
		return import('./environment.dev.js');
	}
	if (environment === 'stage')
	{
		return import('./environment.stage.js');
	}
	if (environment === 'prod')
	{
		return import('./environment.prod.js');
	}
};

export default environmentHelper(process.env.REACT_APP_ENV);
