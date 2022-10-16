/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-waffle')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const ALCHEMY_API_KEY = "HCRG31VsLU11GBr0rL60UixSdj2I_cxU";
const GOERLI_PRIVATE_KEY = "0ac187273f09cb3ec5b9420cd84765ed700f0ed07b7c9002aa5372698dff15d0";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
