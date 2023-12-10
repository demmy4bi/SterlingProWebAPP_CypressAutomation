class Login {
    setUsername(userName) {
        cy.get('#txtUsername').clear().type(userName)
        //  cy.logToTerminal('Username entered successfully');
        cy.task('logMessage', 'Username entered successfully');
    }


    setPassword(password) {
        cy.get('#txtUserPassword').clear().type(password)
        // cy.logToTerminal('Password entered successfully');
        cy.task('logMessage', 'Password entered successfully');
    }

    clickSignIn() {
        cy.get('#btnLogin').click();
        // cy.logToTerminal('Sign In button clicked');
        cy.task('logMessage', 'Sign In button clicked');
    }

    ValidateHomePageUrl() {
        cy.url({ timeout: 30000 }).should("eq", "https://sterlingpro-qa.sterlingapps.p.azurewebsites.net/get-started");
        // cy.logToTerminal('Navigated to HomePage successfully');
        cy.task('logMessage', 'Navigated to HomePage successfully');
    }

    clickLogout() {
        cy.contains('Sign out').click();
        cy.task('logMessage', 'Sign out button clicked');
       // cy.get('#btnLogout').click();
        cy.task('logMessage', 'Logout out button clicked');
    }

    InvalidLoginsAssertion() {
        const expectederrormessage = "Login Failure";

        cy.get("#lblmsg", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);

                // Log messages
                cy.log(`Actual error message = ${actualMessage}`);
                cy.task('logMessage', 'Assertion validate login with unregistered username completed');
            });
    }

    InvalidLoginsAssertion2() {
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('Login Failure'); // Assert the alert message
        });
        cy.task('logMessage', 'Assertion to validate login with Invalid password completed');


    }



}
export default Login;