import { Fixture } from '../Fixture';

export class IncreaseAllowanceFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      data: '0x39509351000000000000000000000000216b4b4ba9f3e719726886d34a177484278bfcae0000000000000000000000000000000000000000000000056bc75e2d63100000',
    };

    super('eth_sendTransaction', [data]);
  }
}
