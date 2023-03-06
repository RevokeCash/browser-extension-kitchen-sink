import { Fixture } from '../../Fixture';

export class LooksRareFixture extends Fixture {
  constructor(address: string) {
    const data = {
      types: {
        MakerOrder: [
          { name: 'isOrderAsk', type: 'bool' },
          { name: 'signer', type: 'address' },
          { name: 'collection', type: 'address' },
          { name: 'price', type: 'uint256' },
          { name: 'tokenId', type: 'uint256' },
          { name: 'amount', type: 'uint256' },
          { name: 'strategy', type: 'address' },
          { name: 'currency', type: 'address' },
          { name: 'nonce', type: 'uint256' },
          { name: 'startTime', type: 'uint256' },
          { name: 'endTime', type: 'uint256' },
          { name: 'minPercentageToAsk', type: 'uint256' },
          { name: 'params', type: 'bytes' },
        ],
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
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
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
