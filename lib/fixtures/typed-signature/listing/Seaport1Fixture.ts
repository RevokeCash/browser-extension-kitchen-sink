import { Fixture } from '../../Fixture';

export class Seaport1Fixture extends Fixture {
  constructor(address: string, considerationOverride?: any[]) {
    const data = {
      types: {
        OrderComponents: [
          { name: 'offerer', type: 'address' },
          { name: 'zone', type: 'address' },
          { name: 'offer', type: 'OfferItem[]' },
          { name: 'consideration', type: 'ConsiderationItem[]' },
          { name: 'orderType', type: 'uint8' },
          { name: 'startTime', type: 'uint256' },
          { name: 'endTime', type: 'uint256' },
          { name: 'zoneHash', type: 'bytes32' },
          { name: 'salt', type: 'uint256' },
          { name: 'conduitKey', type: 'bytes32' },
          { name: 'counter', type: 'uint256' },
        ],
        OfferItem: [
          { name: 'itemType', type: 'uint8' },
          { name: 'token', type: 'address' },
          { name: 'identifierOrCriteria', type: 'uint256' },
          { name: 'startAmount', type: 'uint256' },
          { name: 'endAmount', type: 'uint256' },
        ],
        ConsiderationItem: [
          { name: 'itemType', type: 'uint8' },
          { name: 'token', type: 'address' },
          { name: 'identifierOrCriteria', type: 'uint256' },
          { name: 'startAmount', type: 'uint256' },
          { name: 'endAmount', type: 'uint256' },
          { name: 'recipient', type: 'address' },
        ],
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
      },
      domain: {
        name: 'Seaport',
        version: '1.1',
        chainId: '1',
        verifyingContract: '0x00000000006c3852cbef3e08e8df289169ede581',
      },
      primaryType: 'OrderComponents',
      message: {
        offerer: address,
        zone: '0x004c00500000ad104d7dbd00e3ae0a5c00560c00',
        offer: [
          {
            itemType: '2',
            token: '0x922dc160f2ab743312a6bb19dd5152c1d3ecca33',
            identifierOrCriteria: '176',
            startAmount: '1',
            endAmount: '1',
          },
        ],
        consideration: considerationOverride ?? [
          {
            itemType: '0',
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '0',
            endAmount: '0',
            recipient: address,
          },
          {
            itemType: '0',
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '25000000000000000',
            endAmount: '25000000000000000',
            recipient: '0x8de9c5a032463c561423387a9648c5c7bcc5bc90',
          },
          {
            itemType: '0',
            token: '0x0000000000000000000000000000000000000000',
            identifierOrCriteria: '0',
            startAmount: '50000000000000000',
            endAmount: '50000000000000000',
            recipient: '0x5c6139cd9ff1170197f13935c58f825b422c744c',
          },
        ],
        orderType: '3',
        startTime: '1660565524',
        endTime: '1661170320',
        zoneHash: '0x3000000000000000000000000000000000000000000000000000000000000000',
        salt: '5965482869793190759363249887602871532',
        conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
        counter: '0',
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
