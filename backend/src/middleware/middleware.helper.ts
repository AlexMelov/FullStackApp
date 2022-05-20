export function validateEmail(email : string) : boolean
{
	 return email && email.includes('@') && email.length > 5;
}

export function validatePassword(password : string) : boolean
{
	return password && password.length > 5;
}

export function validateChallenge(challenge : number, email : string, store : Map<string, number>) : boolean
{
	return store.has(email) && challenge && store.get(email) === Number(challenge);
}
