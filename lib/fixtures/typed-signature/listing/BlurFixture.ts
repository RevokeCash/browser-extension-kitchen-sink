import { Fixture } from '../../Fixture';

export class BlurFixture extends Fixture {
  constructor(address: string) {
    const data = {
      types: {
        Order: [
          { name: 'trader', type: 'address' },
          { name: 'side', type: 'uint8' },
          { name: 'matchingPolicy', type: 'address' },
          { name: 'collection', type: 'address' },
          { name: 'tokenId', type: 'uint256' },
          { name: 'amount', type: 'uint256' },
          { name: 'paymentToken', type: 'address' },
          { name: 'price', type: 'uint256' },
          { name: 'listingTime', type: 'uint256' },
          { name: 'expirationTime', type: 'uint256' },
          { name: 'fees', type: 'Fee[]' },
          { name: 'salt', type: 'uint256' },
          { name: 'extraParams', type: 'bytes' },
          { name: 'nonce', type: 'uint256' },
        ],
        Fee: [
          { name: 'rate', type: 'uint16' },
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
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
