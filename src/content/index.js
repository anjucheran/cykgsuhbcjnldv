import store from "../store";

console.log('I am ready')



// Set Teller Home
// let tellerHome = false;
if(document.title.indexOf('Teller Home Page') > -1) {
    // tellerHome = true;
    browser.runtime.sendMessage({type: 'id'}, function(response) {
        console.log('response', response);
        store.dispatch('setTellerHome', response.id)
    });
    // console.log('hi')
} else if(document.title == 'NDB.CEFT.PAYMENT') {
    browser.runtime.sendMessage({type: 'id'}, function(response) {
        console.log('response', response);
        store.dispatch('setCeft', response.id)
    });
} else if(document.title == 'FUNDS.TRANSFER') {
    browser.runtime.sendMessage({type: 'id'}, function(response) {
        console.log('response', response);
        store.dispatch('setFundTransfer', response.id)
    });
} else if(document.title == 'T24 Sign in') {
    store.dispatch('unsetSigned')
    browser.runtime.sendMessage({type: 'id'}, function(response) {
        console.log('response', response);
        store.dispatch('setDbu', response.id)
    });
    console.log('sign-in')
} else if(document.title == 'NDB.T20.SA.LIST' && store.state.product) {
    let tds = document.getElementsByTagName('td');
    for(let i = 0; i < tds.length; i++){
        if(tds[i].innerText == store.state.product) {
            store.dispatch('clearProduct');
            tds[i].parentElement.getElementsByTagName('a')[0].click();
            break;
        }
    }
}
// else if(!store.state.signed) {
//     store.dispatch('setSigned')
//     browser.runtime.sendMessage({type: 'id'}, function(response) {
//         console.log('response', response);
//         store.dispatch('dbu', response.id)
//     });
// }

// Sign-in Section
let username = document.getElementById('signOnName');
let password = document.getElementById('password');
let login = document.getElementById('sign-in');

// Local Deposit Section
let dealTitle = ''
let fieldName_account_2 = ''
let fieldName_amount_local_1_1 = ''
let fieldName_narrative_2_1 = ''
let fieldName_source_of_funds = ''
let fieldName_src_description = ''
let validate = ''

// Foreign Deposit Section
let fieldName_currency_1 = ''
let fieldName_amount_fcy_1_1 = ''

// Cash Withdrawal-Current Section
let newDeal = ''

// CEFT Section
let ceftDeal = document.getElementsByTagName('a')[6];
let fieldName_debit_account = document.getElementById('fieldName:DEBIT.ACCOUNT');
let fieldName_credit_amount = document.getElementById('fieldName:CREDIT.AMOUNT');
let fieldName_credit_account = document.getElementById('fieldName:CREDIT.ACCOUNT');
let fieldName_cr_ac_type = document.getElementById('fieldName:CR.AC.TYPE');
let fieldName_rcvr_name = document.getElementById('fieldName:RCVR.NAME');
let fieldName_credit_bank = document.getElementById('fieldName:CREDIT.BANK');
let fieldName_credit_branch = document.getElementById('fieldName:CREDIT.BRANCH');
let fieldName_narration = document.getElementById('fieldName:NARRATION');
let ceftValidate = document.getElementsByTagName('a')[1];

// Fund Transfer Section
let radio_tab1_bc_man_entry = document.getElementById('radio:tab1:BC.MAN.ENTRY');
let fieldName_debit_acct_no = document.getElementById('fieldName:DEBIT.ACCT.NO');
let fieldName_credit_acct_no = document.getElementById('fieldName:CREDIT.ACCT.NO');
let fieldName_credit_currency = document.getElementById('fieldName:CREDIT.CURRENCY');

if(document.title == 'NDB.CEFT.PAYMENT' && store.state.ceftDeal) {
    store.dispatch('unsetCeftDeal');
    ceftDeal.click();
}

// Teller Home Section
let commandFrame = document.getElementsByTagName('frame')[1];
let localDeposit = ''
let foreignDeposit = ''
let savingsWithdrawal = ''
let currentWithdrawal = ''
let utiltyBill = ''
let creditCard = ''
let contentFrame = document.getElementsByTagName('frame')[6];
if(commandFrame) {
    localDeposit = commandFrame.contentDocument.getElementsByTagName('a')[0];
    foreignDeposit = commandFrame.contentDocument.getElementsByTagName('a')[1];
    savingsWithdrawal = commandFrame.contentDocument.getElementsByTagName('a')[7];
    currentWithdrawal = commandFrame.contentDocument.getElementsByTagName('a')[6];
    utiltyBill = commandFrame.contentDocument.getElementsByTagName('a')[2];
    creditCard = commandFrame.contentDocument.getElementsByTagName('a')[49];
}
if(contentFrame) {
    contentFrame.addEventListener('load', function() {
        // Local Deposit Section
        dealTitle = contentFrame.contentDocument.getElementsByClassName('dealtitle')[0];
        fieldName_account_2 = contentFrame.contentDocument.getElementById('fieldName:ACCOUNT.2');
        fieldName_amount_local_1_1 = contentFrame.contentDocument.getElementById('fieldName:AMOUNT.LOCAL.1:1');
        fieldName_narrative_2_1 = contentFrame.contentDocument.getElementById('fieldName:NARRATIVE.2:1');
        fieldName_source_of_funds = contentFrame.contentDocument.getElementById('fieldName:SOURCE.OF.FUNDS');
        fieldName_src_description = contentFrame.contentDocument.getElementById('fieldName:SRC.DESCRIPTION');
        validate = contentFrame.contentDocument.getElementsByTagName('a')[1];

        // Foreign Deposit Section
        fieldName_currency_1 = contentFrame.contentDocument.getElementById('fieldName:CURRENCY.1');
        fieldName_amount_fcy_1_1 = contentFrame.contentDocument.getElementById('fieldName:AMOUNT.FCY.1:1');

        // Cash Withdrawal-Current Section
        newDeal = contentFrame.contentDocument.getElementsByTagName('a')[6];
        if(store.state.deal) {
            store.dispatch('unsetDeal');
            newDeal.click();
        }
    })
}

window.addEventListener('load', function() {
    // Set Teller Home
    // let tellerHome = false;
    if(document.title.indexOf('Teller Home Page') > -1) {
        // tellerHome = true;
        browser.runtime.sendMessage({type: 'id'}, function(response) {
            console.log('response', response);
            store.dispatch('setTellerHome', response.id)
        });
        // console.log('hi')
    } else if(document.title == 'T24 Sign in') {
        store.dispatch('unsetSigned')
        browser.runtime.sendMessage({type: 'id'}, function(response) {
            console.log('response', response);
            store.dispatch('setDbu', response.id)
        });
        console.log('sign-in')
    } else if(document.title == 'NDB.T20.SA.LIST') {
        console.log('DBU');
    }

    // CEFT Section
    fieldName_debit_account = document.getElementById('fieldName:DEBIT.ACCOUNT');
    fieldName_credit_amount = document.getElementById('fieldName:CREDIT.AMOUNT');
    fieldName_credit_account = document.getElementById('fieldName:CREDIT.ACCOUNT');
    fieldName_cr_ac_type = document.getElementById('fieldName:CR.AC.TYPE');
    fieldName_rcvr_name = document.getElementById('fieldName:RCVR.NAME');
    fieldName_credit_bank = document.getElementById('fieldName:CREDIT.BANK');
    fieldName_credit_branch = document.getElementById('fieldName:CREDIT.BRANCH');
    fieldName_narration = document.getElementById('fieldName:NARRATION');
    ceftValidate = document.getElementsByTagName('a')[1];

    // Fund Transfer Section
    radio_tab1_bc_man_entry = document.getElementById('radio:tab1:BC.MAN.ENTRY');
    fieldName_debit_acct_no = document.getElementById('fieldName:DEBIT.ACCT.NO');
    fieldName_credit_acct_no = document.getElementById('fieldName:CREDIT.ACCT.NO');
    fieldName_credit_currency = document.getElementById('fieldName:CREDIT.CURRENCY');

    // Teller Home Section
    commandFrame = document.getElementsByTagName('frame')[1];
    contentFrame = document.getElementsByTagName('frame')[6];
    if(commandFrame) {
        localDeposit = commandFrame.contentDocument.getElementsByTagName('a')[0];
        foreignDeposit = commandFrame.contentDocument.getElementsByTagName('a')[1];
        savingsWithdrawal = commandFrame.contentDocument.getElementsByTagName('a')[7];
        currentWithdrawal = commandFrame.contentDocument.getElementsByTagName('a')[6];
        utiltyBill = commandFrame.contentDocument.getElementsByTagName('a')[2];
        creditCard = commandFrame.contentDocument.getElementsByTagName('a')[49];
    }
    if(contentFrame) {
        contentFrame.addEventListener('load', function() {
            console.log('I am loading')

            // Local Deposit Section
            dealTitle = contentFrame.contentDocument.getElementsByClassName('dealtitle')[0];
            fieldName_account_2 = contentFrame.contentDocument.getElementById('fieldName:ACCOUNT.2');
            fieldName_amount_local_1_1 = contentFrame.contentDocument.getElementById('fieldName:AMOUNT.LOCAL.1:1');
            fieldName_narrative_2_1 = contentFrame.contentDocument.getElementById('fieldName:NARRATIVE.2:1');
            fieldName_source_of_funds = contentFrame.contentDocument.getElementById('fieldName:SOURCE.OF.FUNDS');
            fieldName_src_description = contentFrame.contentDocument.getElementById('fieldName:SRC.DESCRIPTION');
            validate = contentFrame.contentDocument.getElementsByTagName('a')[1];

            // Foreign Deposit Section
            fieldName_currency_1 = contentFrame.contentDocument.getElementById('fieldName:CURRENCY.1');
            fieldName_amount_fcy_1_1 = contentFrame.contentDocument.getElementById('fieldName:AMOUNT.FCY.1:1');

            // Cash Withdrawal-Current Section
            newDeal = contentFrame.contentDocument.getElementsByTagName('a')[6];
            if(store.state.deal) {
                store.dispatch('unsetDeal');
                newDeal.click();
            }

            // Credit Card Payment Section
            if(store.state.deal) {
                store.dispatch('unsetDeal');
                newDeal.click();
            }
        })
    }
})

browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('request', request);

        switch(request.type) {
            // Sign-in Section
            case 'login':
                if(document.title == 'T24 Sign in') {
                    store.dispatch('unsetDone');
                    store.dispatch('unsetDeal');
                    login.click();
                }
                break;
            case 'username':
                if(document.title == 'T24 Sign in') {
                    username.value = request.value
                }
                break;
            case 'password':
                if(document.title == 'T24 Sign in') {
                    password.value = request.value
                }
                break;

            // Local Deposit Section
            case 'local-deposit':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    localDeposit.click();
                }
                break;
             case 'fieldName_account_2':
                fieldName_account_2.value = request.value
                break;
            case 'fieldName_amount_local_1_1':
                fieldName_amount_local_1_1.value = request.value
                break
            case 'fieldName_narrative_2_1':
                fieldName_narrative_2_1.value = request.value
                break
            case 'fieldName_source_of_funds':
                fieldName_source_of_funds.value = request.value
                break
            case 'fieldName_src_description':
                fieldName_src_description.value = request.value
                break

            // Foreign Deposit Section
            case 'foreign-deposit':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    foreignDeposit.click();
                }
                break;
            case 'fieldName_currency_1':
                fieldName_currency_1.value = request.value
                break
            case 'fieldName_amount_fcy_1_1':
                fieldName_amount_fcy_1_1.value = request.value
                break

            // Cash Withdrawal-Savings Section
            case 'savings-withdrawal':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    savingsWithdrawal.click();
                }
                break;

            // Cash Withdrawal-Current Section
            case 'current-withdrawal':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    store.dispatch('setDeal');
                    currentWithdrawal.click();
                }
                break;

            // Utility Bill Section
            case 'utility-bill':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    utiltyBill.click();
                }
                break;

            // CEFT Section
            case 'fieldName_debit_account':
                fieldName_debit_account.value = request.value;
                break;
            case 'fieldName_credit_amount':
                fieldName_credit_amount.value = request.value;
                break;
            case 'fieldName_credit_account':
                fieldName_credit_account.value = request.value;
                break;
            case 'fieldName_cr_ac_type':
                fieldName_cr_ac_type.value = request.value;
                break;
            case 'fieldName_rcvr_name':
                fieldName_rcvr_name.value = request.value;
                break;
            // Bank Code
            case 'fieldName_credit_bank':
                fieldName_credit_bank.value = request.value;
                break;
            // Branch Code
            case 'fieldName_credit_branch':
                fieldName_credit_branch.value = request.value;
                break;
            case 'fieldName_narration':
                fieldName_narration.value = request.value;
                break;
            case 'ceft-validate':
                ceftValidate.click();
                break;

            // Fund Transfer Section
            case 'radio_tab1_bc_man_entry':
                radio_tab1_bc_man_entry.value = request.value;
                break;
            case 'fieldName_debit_acct_no':
                fieldName_debit_acct_no.value = request.value;
                break;
            case 'fieldName_credit_acct_no':
                fieldName_credit_acct_no.value = request.value;
                break;
            case 'fieldName_credit_currency':
                fieldName_credit_currency.value = request.value;
                break;

            // Credit Card Payment Section
            case 'credit-card':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    store.dispatch('setDeal');
                    creditCard.click();
                }
                break;

            // Form Validation
            case 'validate':
                if(document.title.indexOf('Teller Home Page') > -1) {
                    validate.click();
                }
                break;
        }
});
