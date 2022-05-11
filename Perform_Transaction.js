const Web3 = require('web3');
const rpcUrl = "http://127.0.0.1:7545";
const web3 = new Web3(rpcUrl);


//Fetches the block Number
web3.eth.getBlockNumber().then(console.log);

//Performing the Tx from one account to other
const sourceAccount = "0x88808AAE8b10df449a7aE460B13E3051Fa5FafC9";
const destinationAccount = "0xE2f5aa1c86E3D779489E29617C121A18BA20136e";

web3.eth.sendTransaction({
	from: destinationAccount,
	to: sourceAccount,
	value: web3.utils.toWei('1','ether')
},
(error,response) => {
	console.log("Transaction Hash:",response);
});