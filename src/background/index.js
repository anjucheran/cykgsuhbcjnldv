import store from '../store';

const client = require('emitter-io').connect({ host: '10.96.198.32' });

client.on('connect', function() {

    // clientSubscribe(client);
    // store.dispatch('setClient', client);

    // client.publish({
    //   key: "jRL_PmCtF528PVfQamh1aZGT1uy5o4iU",
    //   channel: "user/user1/",
    //   message: '{"type": "login"}'
    // });
    if(store.state.accessToken) {
      client.subscribe({
        key: store.state.key,
        channel: `user/${store.state.username}/`
      });
    }

    client.on('message', function(msg) {
      console.log(msg);
        sendingMessage(msg);

        // browser.tabs.query({}, function(tabs) {
        //     tabs.forEach((tab) => {
        //         browser.tabs.sendMessage(tab.id, msg.asString());
        //     });
        // });

        // if(store.state.accessToken) {
        //     sendingMessage(msg);
        // } else {
        //     sendingMessage('Error')
        // }
    })
});

// if(store.state.accessToken) {
//   client.subscribe({
//     key: store.state.key,
//     channel: `user/${store.state.username}`
//   });
// }

const clientSubscribe = (client) => {
    client.subscribe({
        key: "nwWtZJSfLjKPYhy3ES8YjIXyrOCQfEKh",
        channel: "user/user2/"
    });
}

const sendingMessage = (msg) => {
    browser.tabs.query({}, function(tabs) {
        tabs.forEach((tab) => {
            browser.tabs.sendMessage(tab.id, JSON.parse(msg.asString()));
        });
    });
}

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.type) {
      case 'id':
          sendResponse({id: sender.tab.id});
          break;
      case 'closeThis':
          browser.tabs.remove(sender.tab.id);
          break;
      case 'closeThese':
          message.tabs.forEach((tab) => {
              browser.tabs.remove(tab);
          })
          sendResponse({status: true});
          break;
      case 'internal-login':
        sendResponse({key: store.state.key, username: store.state.username});
        client.subscribe({
          key: store.state.key,
          channel: `user/${store.state.username}/`
        });
        break;
      case 'internal-logout':
        client.unsubscribe({
          key: store.state.key,
          channel: `user/${store.state.username}/`
        });
        break;
  }
});
