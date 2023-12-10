import Login from "../PageObjects/LoginPage";

const ln = new Login();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Login steps', () => {

    it('Login with Valid Credentials', () => {
        cy.visit('/')
        ln.setUsername("Initiator");
        ln.setPassword("Ab123456@@");
        ln.clickSignIn();
        ln.ValidateHomePageUrl();
        ln.clickLogout();
    })


    it('Login with Unregistered Username', () => {
        cy.visit('/')
        ln.setUsername("Ademola");
        ln.setPassword("Ab123456@@");
        ln.clickSignIn();
        ln.InvalidLoginsAssertion();
    })

    it('Login with Invalid Password', () => {
        cy.visit('/')
        ln.setUsername("Initiator");
        ln.setPassword("Ab123456@@398");
        ln.clickSignIn();
        ln.InvalidLoginsAssertion2();
    })










})