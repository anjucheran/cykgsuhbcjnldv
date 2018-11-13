import store from '../store';

const dealTitle = document.getElementsByClassName('dealtitle')[0];
const fieldName_account_2 = document.getElementById('fieldName:ACCOUNT.2');
const fieldName_amount_local_1_1 = document.getElementById('fieldName:AMOUNT.LOCAL.1:1');
const fieldName_narrative_2_1 = document.getElementById('fieldName:NARRATIVE.2:1');
const fieldName_source_of_funds = document.getElementById('fieldName:SOURCE.OF.FUNDS');
const fieldName_src_description = document.getElementById('fieldName:SRC.DESCRIPTION');

if(dealTitle.textContent == 'Cash Deposit Local') {
    browser.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(request);
            switch(request.type) {
                case 'submit':
                    submit.click();
                    break;
                case 'fieldName_account_2':
                    fieldName_account_2.value = request.value
                    // store.dispatch('setNicData', request.value);
                    break;
                case 'fieldName_amount_local_1_1':
                    fieldName_amount_local_1_1.value = request.value
                    // store.dispatch('setGivenNames', request.value);
                    break
                case 'fieldName_narrative_2_1':
                    fieldName_narrative_2_1.value = request.value
                    // store.dispatch('setFamilyName', request.value)
                    break
                case 'fieldName_source_of_funds':
                    fieldName_source_of_funds.value = request.value
                    break
                case 'fieldName_src_description':
                    fieldName_src_description.value = request.value
                    break
            }
    });
}