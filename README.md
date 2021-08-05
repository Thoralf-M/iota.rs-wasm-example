# iota.rs-wasm-example for Node.js

```
git clone https://github.com/Thoralf-M/iota.rs-wasm-example
```

```
cd iota.rs-wasm-example
```

```
npm i
```

```
node index.js
```

Output should look like
```
{
  nodeinfo: {
    name: 'HORNET',
    version: '1.0.1',
    isHealthy: true,
    networkId: 'chrysalis-devnet',
    bech32HRP: 'atoi',
    minPoWScore: 2000,
    messagesPerSecond: 3,
    referencedMessagesPerSecond: 3,
    referencedRate: 100,
    latestMilestoneTimestamp: 1628161770,
    latestMilestoneIndex: 233980,
    confirmedMilestoneIndex: 233980,
    pruningIndex: 173481,
    features: [ 'PoW' ]
  },
  url: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe'
}
{
  messageId: 'd493a1d9735ed29311884545df288e692c01e1ed7a2f438d83c1da3d5bba2ef4',
  message: {
    networkId: '6514788332515804015',
    parentMessageIds: [
      '1696346405c37e7863bed8c60f264d27f346211b10326dc9d426db25ee53d1ca',
      '656de6e64606352ba3c8c34b476b2e7d662427d76c95803009a029f1210fcb92',
      'fe7c54ab0528972a4866d9326badd8ed3dc64aa08c9771b10b4de0f9923d89cd'
    ],
    payload: {
      type: 2,
      index: '7465737420696e646578',
      data: '746573742064617461'
    },
    nonce: '23175'
  }
}
test data
```
