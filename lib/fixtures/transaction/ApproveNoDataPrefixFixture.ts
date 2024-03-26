import { Fixture } from '../Fixture';

export class ApproveNoDataPrefixFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0x6b175474e89094c44da98b954eedeac495271d0f',
      data: '095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d0000000000000000000000000000000000000000000000056bc75e2d63100000',
    };

    super('eth_sendTransaction', [data]);
  }
}
