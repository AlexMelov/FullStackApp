declare namespace Cypress
{
	interface Chainable<Subject>
	{
		login() : Chainable<Subject>
		logout() : Chainable<Subject>
	}
}
