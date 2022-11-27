require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-truffle5');
require("hardhat-gas-reporter");

task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
      console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "development",
  networks: {
    development: {
      url: 'http://127.0.0.1:8545',
      port: 8545,
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      chainId: 3,
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      chainId: 42,
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      chainId: 4,
    },
    main: {
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      chainId: 1,
    },
    polygon: {
      url: 'https://polygon-mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      chainId: 137,
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      chainId: 80001,
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
