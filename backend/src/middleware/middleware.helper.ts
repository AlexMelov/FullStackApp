import { store } from './register.middleware.js';

export function validateEmail(email : string, password : string, challenge : number) : boolean
{
	return email && email.includes('@') && password && password.length > 5 && challenge && store.get(email) === Number(challenge);
}
