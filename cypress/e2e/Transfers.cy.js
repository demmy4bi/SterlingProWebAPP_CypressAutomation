import Login from "../PageObjects/LoginPage";
import transfer from "../PageObjects/TransferPage";

const ln = new Login();
const tf = new transfer();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Transfer steps', () => {

    it('Local transfer to sterling bank account', () => {
        cy.visit('/')
        ln.setUsername("Initiator");
        ln.setPassword("Ab123456@@");
        ln.clickSignIn();
        ln.ValidateHomePageUrl();
        tf.clickLocalTransfer();
        tf.clickTransfertoSterlingBankAccount();
        tf.selectSourceAccount();
        tf.InputBeneficiaryAccount("0076894759");
        tf.beneficiaryname();
        tf.InputAmount("100");
        tf.InputDescription("chilling");
        tf.clickProceed();
        tf.TransferSuccessAssertion();
        ln.clickLogout();
    })

    it('Local transfer to sterling bank account with Invalid beneficiary account number', () => {
        cy.visit('/')
        ln.setUsername("Initiator");
        ln.setPassword("Ab123456@@");
        ln.clickSignIn();
        ln.ValidateHomePageUrl();
        tf.clickLocalTransfer();
        tf.clickTransfertoSterlingBankAccount();
        tf.selectSourceAccount();
        tf.InputBeneficiaryAccount("0076894790");
        tf.beneficiaryname();
        tf.InvalidBeneficiaryAccountNumberAssertion();
        ln.clickLogout();
    })

    it('Local transfer between own accounts', () => {
        cy.visit('/')
        ln.setUsername("Initiator");
        ln.setPassword("Ab123456@@");
        ln.clickSignIn();
        ln.ValidateHomePageUrl();
        tf.clickLocalTransfer();
        tf.clickTransfertoOwnAccounts();
        tf.selectSourceAccount();
        tf.selectDestinationAccount();
        tf.InputAmount("100");
        tf.InputDescription("chilling");
        tf.clickProceed2();
        tf.SuccessLocalTransferto_OwnAccounts_Assertion();
        ln.clickLogout();
    })

    it('Local transfer to other bank account', () => {
        cy.visit('/')
        ln.setUsername("Initiator");
        ln.setPassword("Ab123456@@");
        ln.clickSignIn();
        ln.ValidateHomePageUrl();
        tf.clickLocalTransfer();
        tf.clickTransfertoOtherBanks();
        tf.InputDescription("chilling");
        tf.InputAmount("100");
        tf.selectRecipientBank();
        tf.InputBeneficiaryAccount("0025998012");
        tf.beneficiaryname2();
        tf.selectSourceAccount();
        tf.clickProceed();
        tf.TransferSuccessAssertion();
        ln.clickLogout();
    })



});

// tf.beneficiarynamee("Ademola AA");
// tf.InputAmount("100");
// tf.clickProceed();
// tf.BeneficiaryAccountNumber_Required_Assertion();