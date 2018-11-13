// import store from "../store";

// let username = document.getElementById('signOnName');
// let password = document.getElementById('password');
// let login = document.getElementById('sign-in');

// let commandFrame = document.getElementsByTagName('frame')[1];
// let localDeposit = ''
// if(commandFrame) {
//     console.log('abcd')
//     localDeposit = commandFrame.contentDocument.getElementsByTagName('a')[0];
// }

// // if(store.state.now === 'sign-in'){
//     window.addEventListener('load', function() {
//         username = document.getElementById('signOnName');
//         password = document.getElementById('password');
//         login = document.getElementById('sign-in');

//         commandFrame = document.getElementsByTagName('frame')[1]
//         if(commandFrame) {
//             console.log('abcd')
//             localDeposit = commandFrame.contentDocument.getElementsByTagName('a')[0];
//         }
//     })

//     browser.runtime.onMessage.addListener(
//         function(request, sender, sendResponse) {
//             console.log(request);
//             switch(request.type) {
//                 case 'login':
//                     store.dispatch('unsetDone');
//                     login.click();
//                     break;
//                 case 'username':
//                     username.value = request.value
//                     break;
//                 case 'password':
//                     password.value = request.value
//                     break;
//                 case 'local-deposit':
//                     console.log('hooo')
//                     if(commandFrame) {
//                         localDeposit.click();
//                     }
//                     break;
//             }
//     });
// // }