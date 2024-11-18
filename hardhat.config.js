require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      accounts: {
        count: 30,  // Number of accounts
        initialBalance: "10000000000000000000000"  // 10,000 ETH initial balance
      }
    }
  }
};
