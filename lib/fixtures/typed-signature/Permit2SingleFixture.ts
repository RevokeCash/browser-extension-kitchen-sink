import { Fixture } from '../Fixture';

export class Permit2SingleFixture extends Fixture {
  constructor(address: string) {
    const data = {
      types: {
        PermitSingle: [
          { name: 'details', type: 'PermitDetails' },
          { name: 'spender', type: 'address' },
          { name: 'sigDeadline', type: 'uint256' },
        ],
        PermitDetails: [
          { name: 'token', type: 'address' },
          { name: 'amount', type: 'uint160' },
          { name: 'expiration', type: 'uint48' },
          { name: 'nonce', type: 'uint48' },
        ],
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
      },
      domain: { name: 'Permit2', chainId: '1', verifyingContract: '0x000000000022d473030f116ddee9f6b43ac78ba3' },
      primaryType: 'PermitSingle',
      message: {
        details: {
          token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          amount: '1461501637330902918203684832716283019655932542975',
          expiration: '1680793842',
          nonce: '0',
        },
        spender: '0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b',
        sigDeadline: '1678203642',
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
