import { Fixture } from '../Fixture';

export class PersonalSignFixture extends Fixture {
  constructor(address: string) {
    super('personal_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  }
}
