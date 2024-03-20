const bluechip_query_tool = require('bluechip-query-tool');
const bluechip_chooser_toolkit = require('bluechip-chooser-toolkit');
const fs_extra = require('fs-extra');
const redux = require('redux');
const supertest = require('supertest');
const lodash = require('lodash');
const dotenv = require('dotenv');
const react_redux = require('react-redux');
const enzyme = require('enzyme');
const pg = require('pg');
const moment = require('moment');
const web3 = require('web3');
const node_sass = require('node-sass');
const xml2js = require('xml2js');
const ethers = require('ethers');
const cheerio = require('cheerio');
const firebase = require('firebase');
const multer = require('multer');
const bcrypt = require('bcrypt');
const socket.io = require('socket.io');

const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
readStream.on('data', chunk => {
  console.log('Chunk received:', chunk.toString());
});

const name = 'Node.js';
console.log(`Hello, ${name}!`);

// Get the latest Ethereum block number
web3.eth.getBlockNumber().then(blockNumber => {
  console.log('Latest block number:', blockNumber);
}).catch(err => {
  console.error('Error getting block number:', err);
});

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

// Deploy a smart contract using Truffle
const TruffleContract = require('@truffle/contract');
const contractJson = require('./build/contracts/YourContract.json');
const contract = TruffleContract(contractJson);
contract.setProvider(web3.currentProvider);

contract.deployed().then(instance => {
  console.log('Contract address:', instance.address);
}).catch(err => {
  console.error('Error deploying contract:', err);
});

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

// Call a view or pure function on a smart contract using Hardhat
async function callContractFunction() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someViewFunction();
  console.log('View function result:', result);
}

callContractFunction().catch(err => {
  console.error('Error calling contract function:', err);
});