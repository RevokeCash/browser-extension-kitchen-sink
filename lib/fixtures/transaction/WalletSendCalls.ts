import { Fixture } from '../Fixture';

export class WalletSendCallsFixture extends Fixture {
  constructor(address: string) {
    const data = {
      version: '2.0.0',
      from: address,
      chainId: '0x1',
      atomicRequired: false,
      calls: [
        {
          to: '0x6b175474e89094c44da98b954eedeac495271d0f',
          data: '0x095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d0000000000000000000000000000000000000000000000056bc75e2d63100000',
        },
        {
          to: '0x42069abfe407c60cf4ae4112bedead391dba1cdb',
          data: '0xa22cb4650000000000000000000000001e0049783f008a0085193e00003d00cd54003c710000000000000000000000000000000000000000000000000000000000000001',
        },
      ],
    };

    super('wallet_sendCalls', [data]);
  }
}
