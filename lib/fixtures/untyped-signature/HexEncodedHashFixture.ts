import { Fixture } from '../Fixture';

export class HexEncodedHashFixture extends Fixture {
  constructor(address: string) {
    super('personal_sign', [address, '0x307864396662323162616462353262393865313465623565323639643066343562313434386434393062616538646136313236386136663264646231376337636332']);
  }
}
