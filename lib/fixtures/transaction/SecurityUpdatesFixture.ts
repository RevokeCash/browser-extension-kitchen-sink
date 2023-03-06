import { Fixture } from '../Fixture';

export class SecurityUpdatesFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0x6d3F7b83bcec11381E81EC858Cc802B1A44f84E2',
      data: '0x5fba79f5',
    };

    super('eth_sendTransaction', [data]);
  }
}
