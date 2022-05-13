import { environmentHelper } from '../../src/environments/environment.helper';
import { Environment } from '../../src/environments/environment.interface';

const environment : Environment = environmentHelper(Cypress.env('APP_ENV'));

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
