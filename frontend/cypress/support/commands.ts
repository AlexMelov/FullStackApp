import { environment } from '../../src/environments/environment';

Cypress.Commands.add('login', () =>
{
	cy.visit(environment.baseUrl + '/' + environment.pageRoutes.login);
	cy.get('[data-test="login-email"]').type('test@test.com');
	cy.get('[data-test="login-password"]').type('123456789');
	cy.get('[data-test="login-button"]').click();
	cy.wait(2000);
});

Cypress.Commands.add('logout', () =>
{
	cy.visit(environment.baseUrl + '/' + environment.pageRoutes.login);
	cy.get('[data-test="logout-button"]').click();
	cy.wait(2000);
});
