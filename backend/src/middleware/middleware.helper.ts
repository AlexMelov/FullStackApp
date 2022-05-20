export function validateEmail(email : string) : boolean
{
	 return email && email.includes('@') && email.length > 5;
}

export function validatePassword(password : string) : boolean
{
	return password && password.length > 5;
}

// todo error handling for register when the challenge is incorrect login/register on the frontend

// change the transport subject from mailer
// and also the message inside
// rename authentication.spec.ts
// rename challenge.ts middleware
// unify the tests suites
// Should be Register and Login interface separate not Register onl;y
