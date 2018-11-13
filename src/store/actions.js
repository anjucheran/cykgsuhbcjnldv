// const expected = 'http://127.0.0.1:5500/index.html'

// export default {

//     selectComponent({ commit },comp) {
//         commit('setComponent', comp)
//     },
//     login({ commit, dispatch, state }, userData) {
//         try {
//             if (typeof userData.accessToken != 'undefined') {
//                 commit('setAccessToken', userData.accessToken);
//                 dispatch('selectComponent', 'Logged');
//                 browser.windows.getAll({populate:true},function(windows){
//                     windows.forEach(function(window){
//                       window.tabs.forEach(function(tab){
//                         if(tab.url == expected) {
//                             browser.tabs.reload();
//                         }
//                       });
//                     });
//                 });
//             }
//         } catch (e) {
//             throw e
//         }
//     },
//     serverInit({ commit, dispatch, state }) {
//         if (state.accessToken) {
//             dispatch('selectComponent', 'Logged');
//         } else {
//             dispatch('selectComponent', 'Basic');
//         }
//     },
//     logout({ commit, dispatch }) {
//         dispatch('selectComponent', 'Basic');
//         commit('clearAccessToken');
//         browser.windows.getAll({populate:true},function(windows){
//             windows.forEach(function(window){
//               window.tabs.forEach(function(tab){
//                 if(tab.url == expected) {
//                     browser.tabs.reload();
//                 }
//               });
//             });
//         });
//     },
//     setNicData({ commit }, data) {
//         commit('setFormNic', data);
//     },
//     setGivenNames({ commit }, data) {
//         commit('setGivenNames', data);
//     },
//     setFamilyName({ commit }, data) {
//         commit('setFamilyName', data);
//     },
//     setDone({ commit }) {
//         commit('setDone');
//     },
//     unsetDone({ commit }) {
//         commit('unsetDone');
//     },
//     setDeal({ commit }) {
//         commit('setDeal');
//     },
//     unsetDeal({ commit }) {
//         commit('unsetDeal');
//     },
//     setTellerHome({ commit }, id) {
//         commit('setTellerHome', id);
//     },
//     clearTellerHome({ commit }) {
//         commit('clearTellerHome');
//     },
//     setCeftDeal({ commit }) {
//         commit('setCeftDeal');
//     },
//     unsetCeftDeal({ commit }) {
//         commit('unsetCeftDeal');
//     },
//     setStatus({ commit }, status) {
//         commit('setStatus', status);
//     },
//     setDbu({ commit }, id) {
//         commit('setDbu', id);
//     },
//     clearDbu({ commit }) {
//         commit('clearDbu');
//     },
//     setFcbu({ commit }, id) {
//         commit('setFcbu', id);
//     },
//     clearFcbu({ commit }) {
//         commit('clearFcbu');
//     },
//     setIdbu({ commit }, id) {
//         commit('setIdbu', id);
//     },
//     clearIdbu({ commit }) {
//         commit('clearIdbu');
//     },
//     setIfcbu({ commit }, id) {
//         commit('setIfcbu', id);
//     },
//     clearIfcbu({ commit }) {
//         commit('clearIfcbu');
//     },
//     setSigned({ commit }) {
//         commit('setSigned')
//     },
//     unsetSigned({ commit }) {
//         commit('unsetSigned')
//     },
//     setProduct({ commit }, code) {
//         commit('setProduct', code)
//     },
//     clearProduct({ commit }) {
//         commit('clearProduct');
//     }
// }

const expected = 'http://10.96.197.131'

export default {

    selectComponent({ commit },comp) {
        commit('setComponent', comp)
    },
    login({ commit, dispatch, state }, userData) {
        try {
            if (typeof userData.authToken != 'undefined') {
                commit('setAccessToken', userData.authToken);
                commit('setKey', userData.browserKey);
                commit('setUsername', userData.name);
                dispatch('selectComponent', 'Logged');
                // client.subscribe({
                //     key: userData.browserKey,
                //     channel: `user/${userData.name}/`
                // });
                browser.windows.getAll({populate:true},function(windows){
                    windows.forEach(function(window){
                      window.tabs.forEach(function(tab){
                        if(tab.url.indexOf(expected) > -1) {
                            browser.tabs.reload();
                        }
                      });
                    });
                });
            }
        } catch (e) {
            throw e
        }
    },
    serverInit({ dispatch, state }) {
        if (state.accessToken) {
            dispatch('selectComponent', 'Logged');
            // client.subscribe({
            //     key: state.key,
            //     channel: `user/${state.username}/`
            // });
        } else {
            dispatch('selectComponent', 'Basic');
        }
    },
    logout({ commit, dispatch, state }) {
        dispatch('selectComponent', 'Basic');
        commit('clearAccessToken');
        commit('clearUsername');
        commit('clearKey');
        browser.windows.getAll({populate:true},function(windows){
            windows.forEach(function(window){
              window.tabs.forEach(function(tab){
                if(tab.url.indexOf(expected) > -1) {
                    browser.tabs.reload();
                }
              });
            });
        });
        // client.unsubscribe({
        //     key: state.key,
        //     channel: `user/${state.username}/`
        // });
    },
    setNicData({ commit }, data) {
        commit('setFormNic', data);
    },
    setGivenNames({ commit }, data) {
        commit('setGivenNames', data);
    },
    setFamilyName({ commit }, data) {
        commit('setFamilyName', data);
    },
    setDone({ commit }) {
        commit('setDone');
    },
    unsetDone({ commit }) {
        commit('unsetDone');
    },
    setDeal({ commit }) {
        commit('setDeal');
    },
    unsetDeal({ commit }) {
        commit('unsetDeal');
    },
    setTellerHome({ commit }, id) {
        commit('setTellerHome', id);
    },
    clearTellerHome({ commit }) {
        commit('clearTellerHome');
    },
    setCeftDeal({ commit }) {
        commit('setCeftDeal');
    },
    unsetCeftDeal({ commit }) {
        commit('unsetCeftDeal');
    },
    setStatus({ commit }, status) {
        commit('setStatus', status);
    },
    setDbu({ commit }, id) {
        commit('setDbu', id);
    },
    clearDbu({ commit }) {
        commit('clearDbu');
    },
    setFcbu({ commit }, id) {
        commit('setFcbu', id);
    },
    clearFcbu({ commit }) {
        commit('clearFcbu');
    },
    setIdbu({ commit }, id) {
        commit('setIdbu', id);
    },
    clearIdbu({ commit }) {
        commit('clearIdbu');
    },
    setIfcbu({ commit }, id) {
        commit('setIfcbu', id);
    },
    clearIfcbu({ commit }) {
        commit('clearIfcbu');
    },
    setSigned({ commit }) {
        commit('setSigned')
    },
    unsetSigned({ commit }) {
        commit('unsetSigned')
    },
    setProduct({ commit }, code) {
        commit('setProduct', code)
    },
    clearProduct({ commit }) {
        commit('clearProduct');
    },
    setCeft({ commit }, id) {
        commit('setCeft', id);
    },
    clearCeft({ commit }) {
        commit('clearCeft');
    },
    setFundTransfer({ commit }, id) {
        commit('setFundTransfer', id);
    },
    clearFundTransfer({ commit }) {
        commit('clearFundTransfer');
    },
    setUsername({ commit }, username) {
        commit('setUsername', username);
    },
    clearUsername({ commit }) {
        commit('clearUsername');
    },
    setKey({ commit }, key) {
        commit('setKey', key);
    },
    clearKey({ commit }) {
        commit('clearKey');
    },
    setClient({ commit }, client) {
      commit('setClient', client);
    },
}
