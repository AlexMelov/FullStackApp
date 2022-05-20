import { store } from './register.middleware.js';

export function validateEmail(email : string, password : string, challenge : number) : boolean
{
	return email && email.includes('@') && password && password.length > 5 && challenge && store.get(email) === Number(challenge);
}
//todo separete this into single functions validate email validate password and validate challenge

// todo error handling for register when the challenge is inccorrect login/register on the frontend
//
// change the transport subject from mailer
// and also the message inside
//
// rename authentication.spec.ts
// rename challenge.ts middleware
// unify the tests suites
//
// Should be Register and Login interface separate not Register onl;y
