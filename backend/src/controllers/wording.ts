const wording : Record<string, any> =
{
	register:
	{
		subject: 'Registration',
		message: 'Your registration is done!',
		userRegisterErrorMessage: 'Failed to post user',
		registrationErrorMessage : 'Failed to hash the password'
	},
	login:
	{
		subject: 'Registration',
		text: 'Your registration is done!',
		tokenCompareErrorMessage: 'Authentication failed on user',
		authenticationErrorMessage: 'Authentication failed on entire authentication'
	},
	todos:
	{
		findErrorMessage: 'Failed to find todos',
		postErrorMessage: 'Failed to post todo',
		deleteErrorMessage: 'Failed to delete todo'
	},
	deleteUser:
	{
		deleteUserErrorMessage: 'Failed to delete user'
	}
};

export default wording;
