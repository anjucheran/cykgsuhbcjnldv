import store from "../store";

let li = document.getElementsByClassName('clsHasKids')[1];
li.getElementsByTagName('span')[0].click();
store.dispatch('setDone');
li.getElementsByTagName('ul')[0].getElementsByTagName('a')[2].click();
setTimeout(function() {
    li.getElementsByTagName('ul')[0].getElementsByTagName('a')[3].click();
    setTimeout(function(){
        li.getElementsByTagName('ul')[0].getElementsByTagName('a')[4].click();
        setTimeout(function() {
            browser.runtime.sendMessage({type: 'closeThis'});
        }, 3000)
    }, 1000)
}, 1000)
