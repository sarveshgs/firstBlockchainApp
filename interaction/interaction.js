const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const metadata = require('../build/contracts/Counter');
const abi = metadata.abi;
const contractAddress = "0x42f18096c12db0b85ce999dbe5cceb4316f1e0be";

async function getMainAccount() {
  let accounts = await web3.eth.getAccounts();
  return accounts[0];
}

async function main() {
  const mainAccount = await getMainAccount();
  const counter = new web3.eth.Contract(abi, contractAddress);

  counter.methods.incrementCounter().send({from: mainAccount})
    .on('receipt', function (receipt) {
      if (receipt.status) {
        let events = Object.keys(receipt.events);
        if (events.length > 0) {
          let event = receipt.events[events[0]];
          console.log("event Name  ", event.event);
          let returnValues = event.returnValues;
          let returnedCount = returnValues.count;
          console.log("count ", returnedCount);
        }
      }
    })
    .on('error', console.error);
}

main();










