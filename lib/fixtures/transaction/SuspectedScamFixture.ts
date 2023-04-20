import { Fixture } from '../Fixture';

export class SuspectedScamFixture extends Fixture {
  constructor(from: string, to: string, selector: string) {
    const data = { from, to, data: selector, value: (0.01e18).toString(16) };
    super('eth_sendTransaction', [data]);
  }
}
