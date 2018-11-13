import store from "../store";

let idFrame = '';
let menuFrame = '';
let tools = '';
let ceft = '';
let fundTransfer = '';
let customer = '';
let dbuAccount = '';
let signOff = '';

const removeTabs = [store.state.ceft, store.state.tellerHome, store.state.fundTransfer];

window.addEventListener('load', function() {
    idFrame = document.getElementsByTagName('frame')[0];
    menuFrame = document.getElementsByTagName('frame')[1];
    tools = idFrame.contentDocument.getElementsByTagName('a')[3];
    ceft = menuFrame.contentDocument.getElementsByClassName('clsHasKids')[66].
    getElementsByTagName('a')[0];
    dbuAccount = menuFrame.contentDocument.getElementsByTagName('a')[4];
    fundTransfer = menuFrame.contentDocument.getElementsByClassName('clsHasKids')[27].
    getElementsByTagName('a')[0];
    customer = menuFrame.contentDocument.getElementsByClassName('clsHasKids')[1].
    getElementsByTagName('a')[1];
    signOff = idFrame.contentDocument.getElementsByTagName('a')[4];
    if(!store.state.done) {
        // tools.click();
    }
    browser.runtime.sendMessage({type: 'id'}, function(response) {
        console.log('res', response.id, 'dbu', store.state.dbu);
        if(response.id == store.state.dbu) {
            store.dispatch('setStatus', 0);
            menuFrame.contentDocument.getElementsByClassName('clsHasKids')[3].
            getElementsByTagName('ul')[0].children[2].getElementsByTagName('a')[0].click();
        }
    });
});

browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('request', request);

        switch(request.type) {
            // CEFT
            case 'ceft':
                browser.runtime.sendMessage({type: 'id'}, function(response) {
                    if(response.id == store.state.dbu) {
                        store.dispatch('setCeftDeal');
                        ceft.click();
                    }
                });
                break;

            // Fund Transfer
            case 'fund-transfer':
                browser.runtime.sendMessage({type: 'id'}, function(response) {
                    if(response.id == store.state.dbu) {
                        fundTransfer.click();
                    }
                });
                break;

            // Customer Section
            case 'customer':
                browser.runtime.sendMessage({type: 'id'}, function(response) {
                    if(response.id == store.state.dbu) {
                        customer.click();
                    }
                });
                break;

            // DBU Section for Account Opening
            case 'dbu':
                browser.runtime.sendMessage({type: 'id'}, function(response) {
                    if(response.id == store.state.dbu) {
                        store.dispatch('setProduct', request.value);
                        dbuAccount.click();
                    }
                });
                break;

            // Sign Off
            case 'sign-off':
                browser.runtime.sendMessage({type: 'closeThese', tabs: removeTabs}, function(response) {
                    if(response.status) {
                        signOff.click();
                    }
                })
        }
});
