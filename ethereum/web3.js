import Web3 from 'web3';

//assuming metamask has injected web3, needs improvement
//const web3 = new Web3(window.web3.currentProvider);
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on server OR user not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/0S1waM5cjwPQgAD5CVN8'
  );
  web3 = new Web3(provider);
}

export default web3;
