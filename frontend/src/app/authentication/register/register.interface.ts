export interface Register
{
	email : string;
	password : string;
}

export interface RegisterConfig
{
	email : 'email' | 'hidden',
	password : 'password' | 'hidden',
	challenge : 'number' | 'hidden'
}
