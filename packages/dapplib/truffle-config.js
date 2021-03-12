require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name recipe machine modify good arena equal general'; 
let testAccounts = [
"0x55f3df9c8cc6c0f5bc80d545997b9544eba0717c55cf5dc431d77dfdc73a016b",
"0x23091cff9cabe76fc7306190df30e86162e65f50702097fceec57f67250ab9b6",
"0x2ab4866f095e9bb13ad5e8aed204bad04a85815b738180357a49f4c0cb59a7be",
"0x634634a2e6e4a95f8cf98d646e6895d0a66f7ddf003c599e2ef92d8514a10680",
"0xc6efdeef4def46b9edaec81dda18b5101a941bdba340f4d95ee525de3c1bd7db",
"0x807cd7231596392adff358843e0310477bdfdd9b909492d3077859084434a870",
"0xfc307ac7989fcae9edc7e268428d62f2e1dd8d6d5e22e732801d42400be06e13",
"0xc8167226ea6d532d5a76dbcca2bbf790a4b3c1a4834431e7b50628321b6ad391",
"0x9d11ec5d07402c3deb64b29a8819228ff2d2099221a9563d06c5aa270f0887cc",
"0xc458d684d0dfd16f30576de36d20ab7ebbef22c6cf6e530f5b47f4f2011b3222"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
