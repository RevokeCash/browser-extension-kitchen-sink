import { Fixture } from '../Fixture';

export class PermitDecimalAddressFixture extends Fixture {
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
        verifyingContract: '917551056842671309452305380979543736893630245704',
        chainId: 1,
      },
      primaryType: 'Permit',
      message: {
        owner: address,
        spender: '597733001430176024049334587394716596403930790981',
        value: '25000000',
        nonce: 5,
        deadline: 1800000000,
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
