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
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/83029d3d4a454afa9e7d1a7fdd484c13");
      },
      network_id: '3',
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    develop: {
      host: "127.0.0.1",
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.7.5"
    }
 },
};
