import { Fixture } from '../Fixture';

export class PermitFixture extends Fixture {
  constructor(address: string) {
    const data = {
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
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
