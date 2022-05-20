const wording : Record<string, any> =
{
	register:
	{
		confirmation:
		{
			subject: 'Registration',
			text: 'Your registration is done!'
		},
		challenge:
		{
			subject:'Registration Challenge',
			text: 'Your challenge is '
		},
		error: 'Wrong Challenge!'
	},
	login:
	{
		subject: 'Login Challenge',
		text: 'Your challenge is ',
		tokenCompareErrorMessage: 'Authentication failed on user'
	},
	middleware:
	{
		error: 'Access is forbidden'
	}
};

export default wording;
