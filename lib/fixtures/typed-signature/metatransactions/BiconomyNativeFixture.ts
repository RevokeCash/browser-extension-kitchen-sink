import { Fixture } from '../../Fixture';

export class BiconomyNativeFixture extends Fixture {
  constructor(address: string) {
    const data = {
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
        functionSignature: '0x095ea7b30000000000000000000000001fdc5e69729eecf8e933c904e86faf7a8886f661ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
