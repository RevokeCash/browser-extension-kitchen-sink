import { Fixture } from '../Fixture';

export class SendUsdcFixture extends Fixture {
  constructor(address: string) {
    const data = {
      from: address,
      to: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      data: '0xa9059cbb000000000000000000000000cef79dec34f142ca2eb920cc783398b1f0063c990000000000000000000000000000000000000000000000000000000000c85781',
    };

    super('eth_sendTransaction', [data]);
  }
}
