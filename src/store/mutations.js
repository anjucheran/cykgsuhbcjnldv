export default  {
  setComponent(state, comp) {
    state.currentComponent = comp;
  },
  setAccessToken(state, token) {
    state.accessToken = token;
  },
  clearAccessToken(state) {
    state.accessToken = ''
  },
  setFormNic(state, num) {
    state.formData.actual_nic_no = num;
  },
  setGivenNames(state, names) {
    state.formData.given_names = names;
  },
  setFamilyName(state, name) {
    state.formData.family_name = name
  },
  setNow(state, now) {
    state.now = now;
  },
  setDone(state) {
    state.done = true;
  },
  unsetDone(state) {
    state.done = false;
  },
  setDeal(state) {
    state.deal = true;
  },
  unsetDeal(state) {
    state.deal = false;
  },
  setTellerHome(state, id) {
    state.tellerHome = id
  },
  clearTellerHome(state) {
    state.tellerHome = ''
  },
  setCeftDeal(state) {
    state.ceftDeal = true;
  },
  unsetCeftDeal(state) {
    state.ceftDeal = false;
  },
  setStatus(state, status) {
    state.status = status;
  },
  setIdbu(state, id) {
    state.idbu = id
  },
  clearIdbu(state) {
    state.idbu = ''
  },
  setDbu(state, id) {
    state.dbu = id
  },
  clearDbu(state) {
    state.dbu = ''
  },
  setFcbu(state, id) {
    state.fcbu = id
  },
  clearFcbu(state) {
    state.fcbu = ''
  },
  setIfcbu(state, id) {
    state.ifcbu = id
  },
  clearIfcbu(state) {
    state.ifcbu = ''
  },
  setSigned(state) {
    state.signed = true
  },
  unsetSigned(state) {
    state.signed = false
  },
  setProduct(state, code) {
    state.product = code
  },
  clearProduct(state) {
    state.product = 0
  },
  setCeft(state, id) {
    state.ceft = id
  },
  clearCeft(state) {
    state.ceft = ''
  },
  setFundTransfer(state, id) {
    state.fundTransfer = id
  },
  clearFundTransfer(state) {
    state.fundTransfer = ''
  },
  setUsername(state, username) {
    state.username = username;
  },
  clearUsername(state) {
    state.username = '';
  },
  setKey(state, key) {
    state.key = key;
  },
  clearKey(state) {
    state.key = '';
  },
  setClient(state, client) {
    state.client = client;
  }
}
