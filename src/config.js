import Web3 from "web3";

export default {
  web3: new Web3(new Web3.providers.HttpProvider("http://node.blockfront.io:8545")),
};
