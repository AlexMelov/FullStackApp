export function validateEmail(email : string) : boolean
{
	 return email && email.includes('@') && email.length > 5;
}

export function validatePassword(password : string) : boolean
{
	return password && password.length > 5;
}
