const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/3a4e151835c14e44bd7a6fdac8cbc12e";
const web3 = new Web3(rpcURL);

console.log("Connected");
//To get wallet Balance
const address = "0x4432194aAba5597f7e04Ff3a5aB2C127eb009150";
web3.eth.getBalance(address,(error,balance) => console.log(web3.utils.fromWei(balance,'ether')));