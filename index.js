const axios = require('axios').default;

axios.defaults.baseURL = 'http://localhost:8088/v2';
axios.defaults.method = 'POST';
axios.defaults.headers = {
  'Content-Type': 'text/plain'
};
axios.defaults.data = {
  jsonrpc: '2.0',
  id: 0,
  method: '',
  params: {}
};

const retrieveAdminBlocksByHeight = height => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'ablock-by-height';
  data.params = { height };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const retreiveAdminBlockByMerkelRootKey = merkelRootKey => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'admin-block';
  data.params = { keymr: merkelRootKey };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const retrieveChainHeadByChainID = chainid => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'chain-head';
  data.params = { chainid };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const commitChain = message => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'commit-chain';
  data.params = { message };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

// retrieveAdminBlocksByHeight(5)
// retreiveAdminBlockByMerkelRootKey('cc03cb3558b6b1acd24c5439fadee6523dd2811af82affb60f056df3374b39ae')
// retrieveChainHeadByChainID('5a77d1e9612d350b3734f6282259b7ff0a3f87d62cfef5f35e91a5604c0490a3')
commitChain('00015507b2f70bd0165d9fa19a28cfaafb6bc82f538955a98c7b7e60d79fbf92655c1bff1c76466cb3bc3f3cc68d8b2c111f4f24c88d9c031b4124395c940e5e2c5ea496e8aaa2f5c956749fc3eba4acc60fd485fb100e601070a44fcce54ff358d606698547340b3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da2946c901273e616bdbb166c535b26d0d446bc69b22c887c534297c7d01b2ac120237086112b5ef34fc6474e5e941d60aa054b465d4d770d7f850169170ef39150b')
  .then(data => console.log(data)).catch(err => console.log(err));
