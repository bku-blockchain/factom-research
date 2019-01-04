const axios = require('axios').default;
const crypto = require('crypto-js');

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

const commitEntry = message => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'commit-entry';
  data.params = { message };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const retrieveDirectoryBlocksByHeight = height => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'dblock-by-height';
  data.params = { height };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const retreiveDirectoryBlockByMerkelRootKey = merkelRootKey => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'directory-block';
  data.params = { keymr: merkelRootKey };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const revealEntry = entry => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'reveal-entry';
  data.params = { entry };
  axios({ data: JSON.stringify(data) })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

const composeEntry = (chainid, extids, content, ecpub) => new Promise((resolve, reject) => {
  const { data } = axios.defaults;
  data.method = 'compose-entry';
  data.params = {
    entry: {
      chainid, extids, content, ecpub
    }
  };
  axios({ data: JSON.stringify(data), url: 'http://localhost:8089/v2' })
    .then(ret => resolve(ret.data.result))
    .catch(err => reject(err));
});

// retrieveAdminBlocksByHeight(200)
// retreiveAdminBlockByMerkelRootKey('234c00936b1633a88cf3f3fce502c958c93e907dede4e1558f9972d338459633');
// retreiveDirectoryBlockByMerkelRootKey('436cda57efd22f9a5562697523a0aab8426507ea89dd734ddd6c476210c5f75e')
// retrieveDirectoryBlocksByHeight(1000)
// revealEntry('007E18CCC911F057FB111C7570778F6FDC51E189F35A6E6DA683EC2A264443531F000E0005746573745A0005746573745A48656C6C6F20466163746F6D21')
// retrieveChainHeadByChainID('5a77d1e9612d350b3734f6282259b7ff0a3f87d62cfef5f35e91a5604c0490a3')
commitChain('00015507b2f70bd0165d9fa19a28cfaafb6bc82f538955a98c7b7e60d79fbf92655c1bff1c76466cb3bc3f3cc68d8b2c111f4f24c88d9c031b4124395c940e5e2c5ea496e8aaa2f5c956749fc3eba4acc60fd485fb100e601070a44fcce54ff358d606698547340b3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da2946c901273e616bdbb166c535b26d0d446bc69b22c887c534297c7d01b2ac120237086112b5ef34fc6474e5e941d60aa054b465d4d770d7f850169170ef39150b');
commitEntry('00015507C1024BF5C956749FC3EBA4ACC60FD485FB100E601070A44FCCE54FF358D60669854734013B6A27BCCEB6A42D62A3A8D02A6F0D73653215771DE243A63AC048A18B59DA29F4CBD953E6EBE684D693FDCA270CE231783E8ECC62D630F983CD59E559C6253F84D1F54C8E8D8665D493F7B4A4C1864751E3CDEC885A64C2144E0938BF648A00')
// composeEntry('48e0c94d00bf14d89ab10044075a370e1f55bcb28b2ff16206d865e192827645', ['cd90', '90cd'], 'abcdef', 'EC2DKSYyRcNWf7RS963VFYgMExo1824HVeCfQ9PGPmNzwrcmgm2r')
  .then(data => console.log(data)).catch(err => console.log(err));

// d0165d9fa19a28cfaafb6bc82f538955a98c7b7e60d79fbf92655c1bff1c7646

// const entry = '007E18CCC911F057FB111C7570778F6FDC51E189F35A6E6DA683EC2A264443531F000E0005746573745A0005746573745A48656C6C6F20466163746F6D21';
// const sha512 = crypto.SHA512(entry,).toString();
// console.log(sha512);
// const entryHash = crypto.SHA256(sha512 + entry).toString();
// console.log(entryHash);
