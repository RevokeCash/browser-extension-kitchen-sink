import { Fixture } from '../Fixture';

export class SendEthFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      value: '10000000000000000', // 0.01 ETH
    };

    super('eth_sendTransaction', [data]);
  }
}
