import { Fixture } from '../Fixture';

export class ApproveCapsDataFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0x6b175474e89094c44da98b954eedeac495271d0f',
      data: '0x095EA7B30000000000000000000000007A250D5630B4CF539739DF2C5DACB4C659F2488D0000000000000000000000000000000000000000000000056BC75E2D63100000',
    };

    super('eth_sendTransaction', [data]);
  }
}
