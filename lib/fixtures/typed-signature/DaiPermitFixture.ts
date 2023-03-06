import { Fixture } from '../Fixture';

export class DaiPermitFixture extends Fixture {
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
    };

    super('eth_signTypedData_v3', [address, JSON.stringify(data)]);
  }
}
