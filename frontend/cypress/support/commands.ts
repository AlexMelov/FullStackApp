import { environment } from '../../src/environments/environment';

Cypress.Commands.add('login', () =>
{
	cy.visit(environment.baseUrl + '/' + environment.pageRoutes.login);
	cy.get('[data-test="login_email"]').type('test@test.com');
	cy.get('[data-test="login_password"]').type('123456789');
	cy.get('[data-test="login_button"]').click();
	cy.wait(2000);
	cy.reload();
});
