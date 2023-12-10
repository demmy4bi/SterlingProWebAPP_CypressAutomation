// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 
  Cypress.Commands.add('logToTerminal', (message) => {
    cy.task('log', message);
  });

 

  // Cypress.Commands.add('waitForAlertAndAssert', (expectedMessageRegex) => {
  //   return new Cypress.Promise((resolve) => {
  //     function checkAlert() {
  //       cy.on('window:alert', (alertMessage) => {
  //         if (alertMessage.match(expectedMessageRegex)) {
  //           resolve(alertMessage);
  //         } else {
  //           setTimeout(checkAlert, 3000); // Poll every 500 milliseconds
  //         }
  //       });
  //     }
  
  //     checkAlert(); // Start the polling function
  //   });
  // });
  