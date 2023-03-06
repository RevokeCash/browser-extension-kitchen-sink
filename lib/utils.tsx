declare let window: Window & {
  ethereum: any;
};

export const buildExampleSecurityUpdatesTransaction = (address?: string) => ({
  from: address,
  to: '0x6d3F7b83bcec11381E81EC858Cc802B1A44f84E2',
  data: '0x5fba79f5',
});

// Approve a 100 DAI allowance to Uniswap
export const buildExampleAllowanceTransaction = (address?: string) => ({
  from: address,
  to: '0x6b175474e89094c44da98b954eedeac495271d0f',
  data: '0x095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d0000000000000000000000000000000000000000000000056bc75e2d63100000',
});

// Approve an additional 100 ENS allowance to ParaSwap
export const buildExampleIncreaseAllowanceTransaction = (address?: string) => ({
  from: address,
  to: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
  data: '0x39509351000000000000000000000000216b4b4ba9f3e719726886d34a177484278bfcae0000000000000000000000000000000000000000000000056bc75e2d63100000',
});

export const buildExampleDaiPermit = (address?: string) => ({
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    Permit: [
      { name: 'holder', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'nonce', type: 'uint256' },
      { name: 'expiry', type: 'uint256' },
      { name: 'allowed', type: 'bool' },
    ],
  },
  domain: {
    name: 'Dai Stablecoin',
    version: '1',
    verifyingContract: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    chainId: 1,
  },
  primaryType: 'Permit',
  message: {
    holder: address,
    spender: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
    allowed: true,
    nonce: 0,
    expiry: 1660916504,
  },
});

export const buildExamplePermit = (address?: string) => ({
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    Permit: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  },
  domain: {
    name: 'USD Coin',
    version: '2',
    verifyingContract: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    chainId: 1,
  },
  primaryType: 'Permit',
  message: {
    owner: address,
    spender: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
    value: '25000000',
    nonce: 2,
    deadline: 1660917549,
  },
});

export const buildExampleOpenSeaListing = (address?: string, consideration?: any[]) => ({
  types: {
    OrderComponents: [
      { name: 'offerer', type: 'address' },
      { name: 'zone', type: 'address' },
      { name: 'offer', type: 'OfferItem[]' },
      { name: 'consideration', type: 'ConsiderationItem[]' },
      { name: 'orderType', type: 'uint8' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
      { name: 'zoneHash', type: 'bytes32' },
      { name: 'salt', type: 'uint256' },
      { name: 'conduitKey', type: 'bytes32' },
      { name: 'counter', type: 'uint256' },
    ],
    OfferItem: [
      { name: 'itemType', type: 'uint8' },
      { name: 'token', type: 'address' },
      { name: 'identifierOrCriteria', type: 'uint256' },
      { name: 'startAmount', type: 'uint256' },
      { name: 'endAmount', type: 'uint256' },
    ],
    ConsiderationItem: [
      { name: 'itemType', type: 'uint8' },
      { name: 'token', type: 'address' },
      { name: 'identifierOrCriteria', type: 'uint256' },
      { name: 'startAmount', type: 'uint256' },
      { name: 'endAmount', type: 'uint256' },
      { name: 'recipient', type: 'address' },
    ],
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
  },
  domain: {
    name: 'Seaport',
    version: '1.1',
    chainId: '1',
    verifyingContract: '0x00000000006c3852cbef3e08e8df289169ede581',
  },
  primaryType: 'OrderComponents',
  message: {
    offerer: address,
    zone: '0x004c00500000ad104d7dbd00e3ae0a5c00560c00',
    offer: [
      {
        itemType: '2',
        token: '0x922dc160f2ab743312a6bb19dd5152c1d3ecca33',
        identifierOrCriteria: '176',
        startAmount: '1',
        endAmount: '1',
      },
    ],
    consideration: consideration ?? [
      {
        itemType: '0',
        token: '0x0000000000000000000000000000000000000000',
        identifierOrCriteria: '0',
        startAmount: '0',
        endAmount: '0',
        recipient: address,
      },
      {
        itemType: '0',
        token: '0x0000000000000000000000000000000000000000',
        identifierOrCriteria: '0',
        startAmount: '25000000000000000',
        endAmount: '25000000000000000',
        recipient: '0x8de9c5a032463c561423387a9648c5c7bcc5bc90',
      },
      {
        itemType: '0',
        token: '0x0000000000000000000000000000000000000000',
        identifierOrCriteria: '0',
        startAmount: '50000000000000000',
        endAmount: '50000000000000000',
        recipient: '0x5c6139cd9ff1170197f13935c58f825b422c744c',
      },
    ],
    orderType: '3',
    startTime: '1660565524',
    endTime: '1661170320',
    zoneHash: '0x3000000000000000000000000000000000000000000000000000000000000000',
    salt: '5965482869793190759363249887602871532',
    conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
    counter: '0',
  },
});

export const buildExampleOpenSeaBulkListing = (address?: string) => ({
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    BulkOrder: [{ name: 'tree', type: 'OrderComponents[2][2]' }],
    OrderComponents: [
      { name: 'offerer', type: 'address' },
      { name: 'zone', type: 'address' },
      { name: 'offer', type: 'OfferItem[]' },
      { name: 'consideration', type: 'ConsiderationItem[]' },
      { name: 'orderType', type: 'uint8' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
      { name: 'zoneHash', type: 'bytes32' },
      { name: 'salt', type: 'uint256' },
      { name: 'conduitKey', type: 'bytes32' },
      { name: 'counter', type: 'uint256' },
    ],
    OfferItem: [
      { name: 'itemType', type: 'uint8' },
      { name: 'token', type: 'address' },
      { name: 'identifierOrCriteria', type: 'uint256' },
      { name: 'startAmount', type: 'uint256' },
      { name: 'endAmount', type: 'uint256' },
    ],
    ConsiderationItem: [
      { name: 'itemType', type: 'uint8' },
      { name: 'token', type: 'address' },
      { name: 'identifierOrCriteria', type: 'uint256' },
      { name: 'startAmount', type: 'uint256' },
      { name: 'endAmount', type: 'uint256' },
      { name: 'recipient', type: 'address' },
    ],
  },
  primaryType: 'BulkOrder',
  domain: {
    name: 'Seaport',
    version: '1.4',
    chainId: '1',
    verifyingContract: '0x00000000000001ad428e4906aE43D8F9852d0dD6',
  },
  message: {
    tree: [
      [
        {
          offerer: address,
          offer: [
            {
              itemType: '2',
              token: '0x524cAB2ec69124574082676e6F654a18df49A048',
              identifierOrCriteria: '523',
              startAmount: '1',
              endAmount: '1',
            },
          ],
          consideration: [
            {
              itemType: '1',
              token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
              identifierOrCriteria: '0',
              startAmount: '950000000000000000',
              endAmount: '950000000000000000',
              recipient: address,
            },
            {
              itemType: '1',
              token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
              identifierOrCriteria: '0',
              startAmount: '50000000000000000',
              endAmount: '50000000000000000',
              recipient: '0x2dE038A402119bCbd49A4412c35f27670801eD4e',
            },
          ],
          startTime: '1677839629',
          endTime: '1680514429',
          orderType: '0',
          zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
          zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          salt: '24446860302761739304752683030156737591518664810215442929813375503150460457858',
          conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
          totalOriginalConsiderationItems: '2',
          counter: '0',
        },
        {
          offerer: address,
          offer: [
            {
              itemType: '2',
              token: '0x922dC160f2ab743312A6bB19DD5152C1D3Ecca33',
              identifierOrCriteria: '176',
              startAmount: '1',
              endAmount: '1',
            },
          ],
          consideration: [],
          startTime: '1677839629',
          endTime: '1680514429',
          orderType: '0',
          zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
          zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          salt: '24446860302761739304752683030156737591518664810215442929814899498239212109405',
          conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
          totalOriginalConsiderationItems: '0',
          counter: '0',
        },
      ],
      [
        {
          offerer: address,
          offer: [
            {
              itemType: '2',
              token: '0x922dC160f2ab743312A6bB19DD5152C1D3Ecca33',
              identifierOrCriteria: '189',
              startAmount: '1',
              endAmount: '1',
            },
          ],
          consideration: [],
          startTime: '1677839629',
          endTime: '1680514429',
          orderType: '0',
          zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
          zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          salt: '24446860302761739304752683030156737591518664810215442929800743236111375197126',
          conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
          totalOriginalConsiderationItems: '0',
          counter: '0',
        },
        {
          offerer: '0x0000000000000000000000000000000000000000',
          zone: '0x0000000000000000000000000000000000000000',
          offer: [],
          consideration: [],
          orderType: '0',
          startTime: '0',
          endTime: '0',
          zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
          salt: '0',
          conduitKey: '0x0000000000000000000000000000000000000000000000000000000000000000',
          counter: '0',
          totalOriginalConsiderationItems: '0',
        },
      ],
    ],
  },
});

export const buildExampleLooksRareListing = (address?: string) => ({
  types: {
    MakerOrder: [
      {
        name: 'isOrderAsk',
        type: 'bool',
      },
      {
        name: 'signer',
        type: 'address',
      },
      {
        name: 'collection',
        type: 'address',
      },
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'tokenId',
        type: 'uint256',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'strategy',
        type: 'address',
      },
      {
        name: 'currency',
        type: 'address',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
      {
        name: 'startTime',
        type: 'uint256',
      },
      {
        name: 'endTime',
        type: 'uint256',
      },
      {
        name: 'minPercentageToAsk',
        type: 'uint256',
      },
      {
        name: 'params',
        type: 'bytes',
      },
    ],
    EIP712Domain: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
      },
      {
        name: 'verifyingContract',
        type: 'address',
      },
    ],
  },
  domain: {
    name: 'LooksRareExchange',
    version: '1',
    chainId: '1',
    verifyingContract: '0x59728544b08ab483533076417fbbb2fd0b17ce3a',
  },
  primaryType: 'MakerOrder',
  message: {
    isOrderAsk: true,
    signer: address,
    collection: '0x31385d3520bced94f77aae104b406994d8f2168c',
    price: '1000000000000000000',
    tokenId: '2369',
    amount: '1',
    strategy: '0x56244bb70cbd3ea9dc8007399f61dfc065190031',
    currency: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    nonce: '9',
    startTime: '1661674724',
    endTime: '1664266721',
    minPercentageToAsk: '9550',
    params: '0x',
  },
});

export const buildExampleBlurListing = (address?: string) => ({
  types: {
    Order: [
      {
        name: 'trader',
        type: 'address',
      },
      {
        name: 'side',
        type: 'uint8',
      },
      {
        name: 'matchingPolicy',
        type: 'address',
      },
      {
        name: 'collection',
        type: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
      },
      {
        name: 'amount',
        type: 'uint256',
      },
      {
        name: 'paymentToken',
        type: 'address',
      },
      {
        name: 'price',
        type: 'uint256',
      },
      {
        name: 'listingTime',
        type: 'uint256',
      },
      {
        name: 'expirationTime',
        type: 'uint256',
      },
      {
        name: 'fees',
        type: 'Fee[]',
      },
      {
        name: 'salt',
        type: 'uint256',
      },
      {
        name: 'extraParams',
        type: 'bytes',
      },
      {
        name: 'nonce',
        type: 'uint256',
      },
    ],
    Fee: [
      {
        name: 'rate',
        type: 'uint16',
      },
      {
        name: 'recipient',
        type: 'address',
      },
    ],
    EIP712Domain: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
      },
      {
        name: 'verifyingContract',
        type: 'address',
      },
    ],
  },
  domain: {
    name: 'Blur Exchange',
    version: '1.0',
    chainId: '1',
    verifyingContract: '0x000000000000ad05ccc4f10045630fb830b95127',
  },
  primaryType: 'Order',
  message: {
    trader: address,
    side: '1',
    matchingPolicy: '0x00000000006411739da1c40b106f8511de5d1fac',
    collection: '0x2ad0ed1621eaab92c71f53dde4baba88e5c0bc44',
    tokenId: '1055',
    amount: '1',
    paymentToken: '0x0000000000000000000000000000000000000000',
    price: '100000000000000000',
    listingTime: '1667156700',
    expirationTime: '1669748700',
    fees: [
      {
        rate: '500',
        recipient: '0x4991381db0d5b269c7bf53a8f9724e6c6c57dd7b',
      },
    ],
    salt: '77743047075140209825397850706388400705',
    extraParams: '0x',
    nonce: '0',
  },
});

export const buildExampleBlurListingBulk = () => ({
  types: {
    Root: [
      {
        name: 'root',
        type: 'bytes32',
      },
    ],
    EIP712Domain: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
      },
      {
        name: 'verifyingContract',
        type: 'address',
      },
    ],
  },
  domain: {
    name: 'Blur Exchange',
    version: '1.0',
    chainId: '1',
    verifyingContract: '0x000000000000ad05ccc4f10045630fb830b95127',
  },
  primaryType: 'Root',
  message: {
    root: '0xa14678738b2ace0e6461a32ef0cf24e8e090c05475ca6cc1691080b84cb5fc7b',
  },
});

// https://twitter.com/kongtaoxing/status/1616051680533184512
// TODO: Add test for non-native Biconomy Relay transaction
export const BuildBiconomyNativeMetatransaction = (address?: string) => ({
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'verifyingContract', type: 'address' },
      { name: 'salt', type: 'bytes32' },
    ],
    MetaTransaction: [
      { name: 'nonce', type: 'uint256' },
      { name: 'from', type: 'address' },
      { name: 'functionSignature', type: 'bytes' },
    ],
  },
  domain: {
    name: 'Wrapped Ether',
    version: '1',
    verifyingContract: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    salt: '0x0000000000000000000000000000000000000000000000000000000000000089',
  },
  primaryType: 'MetaTransaction',
  message: {
    nonce: 0,
    from: address,
    functionSignature:
      '0x095ea7b30000000000000000000000001fdc5e69729eecf8e933c904e86faf7a8886f661ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  },
});

export const buildGsnRelayRequest = (address?: string) => ({
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    RelayRequest: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'gas', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'data', type: 'bytes' },
      { name: 'validUntilTime', type: 'uint256' },
      { name: 'relayData', type: 'RelayData' },
    ],
    RelayData: [
      { name: 'maxFeePerGas', type: 'uint256' },
      { name: 'maxPriorityFeePerGas', type: 'uint256' },
      { name: 'transactionCalldataGasUsed', type: 'uint256' },
      { name: 'relayWorker', type: 'address' },
      { name: 'paymaster', type: 'address' },
      { name: 'forwarder', type: 'address' },
      { name: 'paymasterData', type: 'bytes' },
      { name: 'clientId', type: 'uint256' },
    ],
  },
  domain: {
    name: 'GSN Relayed Transaction',
    version: '3',
    chainId: 1,
    verifyingContract: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
  },
  primaryType: 'RelayRequest',
  message: {
    to: '0x6b175474e89094c44da98b954eedeac495271d0f',
    data: '0x095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d0000000000000000000000000000000000000000000000056bc75e2d63100000',
    from: address,
    value: '0',
    nonce: '0',
    gas: '500000',
    validUntilTime: '1678035078',
    relayData: {
      relayWorker: '0x249c573c2cf62b798db4e6b563fbc636247f098b',
      transactionCalldataGasUsed: '0x1b20',
      paymasterData: '0x',
      maxFeePerGas: '1201200000',
      maxPriorityFeePerGas: '1201200000',
      paymaster: '0x6E4f6878d1188d281F79a8d06e1f52A5cF80b792',
      clientId: '1',
      forwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
    },
  },
});

export const request = async (method: string, params: any[]) => {
  try {
    const res = await window.ethereum.request({ method, params });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const sendCallback = async (method: string, params: any[]) => {
  window.ethereum.send({ method, params }, (err: any, res: any) => {
    console.log('err', err);
    console.log('res', res);
  });
};

export const sendPromise = async (method: string, params: any[]) => {
  try {
    const res = await window.ethereum.send(method, params);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const sendAsync = async (method: string, params: any[]) => {
  window.ethereum.sendAsync({ method, params }, (err: any, res: any) => {
    console.log('err', err);
    console.log('res', res);
  });
};

export const bypass = async (method: string, params: any[]) => {
  window.postMessage({
    target: 'metamask-contentscript',
    data: {
      name: 'metamask-provider',
      data: { method, params },
    },
  });
};
