class transfer {

    clickLocalTransfer() {
        cy.get('#TransferLink p').click();
        cy.task('logMessage', 'Local transfer clicked');
    }

    clickTransfertoSterlingBankAccount() {
        cy.get('#A7').click();
        cy.task('logMessage', 'Transfer to sterling bank account clicked');
    }

    clickTransfertoOwnAccounts() {
        cy.get('#A6').click();
        cy.task('logMessage', 'Transfer to own accounts clicked');
    }

    clickTransfertoOtherBanks() {
        cy.get('#A8').click();
        cy.task('logMessage', 'Transfer to other banks clicked');
    }

    selectSourceAccount() {
        //cy.get('#middleContent_drpSourceAccount').select();
        cy.get('#middleContent_drpSourceAccount').select('0064729139');
        cy.task('logMessage', 'Source account selected');
    }

    selectDestinationAccount() {
        cy.get('#middleContent_drpDestination').select('0004928112');
        cy.task('logMessage', 'Destination account selected');
    }

    selectRecipientBank() {
         
        cy.get('#middleContent_drpBanks').select('Access Bank');
        cy.task('logMessage', 'Bank selected');
    }

    InputBeneficiaryAccount(beneficiaryAccount) {
        cy.get('#middleContent_BeneficiaryAccount').click().type(beneficiaryAccount);
        cy.task('logMessage', 'Beneficiary account entered');
    }

    beneficiaryname() {
        cy.get('body').click();
        cy.wait(6000);
        cy.task('logMessage', 'Beneficiary account validated successfully');
    }

    beneficiaryname2() {
        cy.get('#middleContent_txtBenName').click();
        cy.wait(6000);
        cy.task('logMessage', 'Beneficiary account validated successfully');
    }

    beneficiarynamee(beneficiaryname) {
        cy.get('body').click().type(beneficiaryname);
        cy.task('logMessage', 'Beneficiary name entered');
    }

    InputAmount(amount) {
        cy.get('#middleContent_txtAmount').click().type(amount);
        cy.task('logMessage', 'Transaction amount entered ');
    }

    InputDescription(description) {
        cy.get('#middleContent_txtnarrationdesc').click().type(description);
        cy.task('logMessage', 'Transaction narration entered');
    }



    clickProceed() {
        cy.get('#middleContent_btnSubmit').click();
        cy.task('logMessage', 'Transaction submitted successfully');
    }

    clickProceed2() {
        cy.get('#middleContent_btnTransfer').click();
        cy.task('logMessage', 'Transaction submitted successfully');
    }

    TransferSuccessAssertion() {
        const expectedsuccessmessage = "Your transaction has been sent for approval.";

        cy.get("#middleContent_lblmsg", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectedsuccessmessage);

                // Log messages
                cy.log(`Actual error message = ${actualMessage}`);
                cy.task('logMessage', 'Assertion of transfer sent for approval successful');
            });
    }

    InvalidBeneficiaryAccountNumberAssertion() {
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('Name Enquiry Failed'); // Assert the alert message
        }).then(() => {
            cy.on('window:confirm', () => true);
            cy.task('logMessage', 'Assertion to validate Invalid Beneficiary Account completed');
        });
    }

    BeneficiaryAccountNumber_Required_Assertion() {
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('Beneficiary account number is required!.'); // Assert the alert message
        }).then(() => {
            cy.on('window:confirm', () => true);
            cy.task('logMessage', 'Assertion to validate Beneficiary Acount Required completed');
        });
    }

    SuccessLocalTransferto_OwnAccounts_Assertion() {
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('Fund transfer has been sent for approval'); // Assert the alert message
        }).then(() => {
            cy.on('window:confirm', () => true);
            cy.task('logMessage', 'Assertion to validate successful local transfer to own account completed');
        });
    }


}
export default transfer;