import { Fixture } from '../../Fixture';

export class BlurBulkFixture extends Fixture {
  constructor(address: string) {
    const data = {
      types: {
        Root: [{ name: 'root', type: 'bytes32' }],
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
      primaryType: 'Root',
      message: {
        root: '0xa14678738b2ace0e6461a32ef0cf24e8e090c05475ca6cc1691080b84cb5fc7b',
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
