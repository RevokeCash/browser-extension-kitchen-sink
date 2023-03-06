import { Fixture } from '../../Fixture';

export class GsnRelayFixture extends Fixture {
  constructor(address: string) {
    const data = {
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
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
