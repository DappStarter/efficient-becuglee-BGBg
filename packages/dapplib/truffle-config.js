require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn proof grace brick flush sunny'; 
let testAccounts = [
"0x1b232cf4701436eef2f7eedf9ef1dbbf8a6f025273ebcd660c1842c681fe3b43",
"0x427cc3f76dac0cc388b322250cad036a3cce8bc174a87bfedf95d4f672b9a4f5",
"0x679fe20c765c27fa068255171a4fd3f65fdd507aebfe57ea9bc9688399e3b4fc",
"0xea5f3cf0fcc8c66fb00a288debf1480599fa04a69cdb0bb0e25807492d280a0f",
"0x5b17b0bc30c06c3942992bb4b7736a5d09075ae0801e060a91112319c98a6586",
"0x448efe3fb39f994eb4682012294adbf1ef4085a83c5d2c46cb48b062208f45a0",
"0x87f28b12d480f33cdcfc09959d12861a97b5107fcdb47f6f580620b68cc558df",
"0x9769b89d4cc81f8e6a408f5e44a5fd9dbcd10b5ff11984a79658dc988ce5ca9d",
"0x7a61a29997374602f41a6dc6a720d3751ff0523a9362dc7375ec517d933e76be",
"0xa62b0d194a6c3be85d0e8b073bf25a96a9a5447d3b6a0d683703859c617523f5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

