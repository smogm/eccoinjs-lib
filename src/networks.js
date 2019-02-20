// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  eccoin: {
    messagePrefix: '\xce\xf1\xdb\xfa',
    bech32: 'ec',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x21,
    scriptHash: 0x08,
    wif: 0x80
  },
  regtest: {
    messagePrefix: '\xaa\xbb\xcc\xdd',
    bech32: 'ecrt',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x33,
    scriptHash: 0x0f,
    wif: 0x80
  },
  testnet: {
    messagePrefix: '\xee\xff\xaa\xbb',
    bech32: 'te',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x33,
    scriptHash: 0x0f,
    wif: 0xef
  }
}
