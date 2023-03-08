import { Fixture } from '../Fixture';

export class SetApprovalForAllFixture extends Fixture {
  constructor(address: string) {
    const data = {
      gas: '0xea28',
      value: '0x0',
      from: address,
      to: '0x42069abfe407c60cf4ae4112bedead391dba1cdb',
      data: '0xa22cb4650000000000000000000000001e0049783f008a0085193e00003d00cd54003c710000000000000000000000000000000000000000000000000000000000000001',
    };
    super('eth_sendTransaction', [data]);
  }
}
