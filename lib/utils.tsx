declare let window: Window & {
  ethereum: any;
};

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

// List a CryptoDuckie for 1 ETH
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
