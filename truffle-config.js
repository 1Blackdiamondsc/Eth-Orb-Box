const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")

const fs = require("fs")
const mnemonic = fs.readFileSync(".secret").toString().trim()

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/488a994fe24f473686a36a7ba81bff81");
      },
      network_id: '3',
    },
    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.6.2"
    }
 },
};
