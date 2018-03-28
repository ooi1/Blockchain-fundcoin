// Deployed at:  0x3a547E3141036c2B18749c94Daf62E341d32B91F

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const {interface, bytecode} = require('./compile');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'rigid vacuum phrase illness sell divert good want task vendor bread wild',
  'https://rinkeby.infura.io/0S1waM5cjwPQgAD5CVN8'
);

const web3 = new Web3(provider);

const deploy = async ()=> {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0]});

  //console.log(interface);
  console.log('Contract deployed to', result.options.address);
}
deploy();
