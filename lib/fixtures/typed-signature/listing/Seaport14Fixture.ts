import { Fixture } from '../../Fixture';

export class Seaport14Fixture extends Fixture {
  constructor(address: string) {
    const data = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        BulkOrder: [{ name: 'tree', type: 'OrderComponents[2][2]' }],
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
      },
      primaryType: 'BulkOrder',
      domain: {
        name: 'Seaport',
        version: '1.4',
        chainId: '1',
        verifyingContract: '0x00000000000001ad428e4906aE43D8F9852d0dD6',
      },
      message: {
        tree: [
          [
            {
              offerer: address,
              offer: [
                {
                  itemType: '2',
                  token: '0x524cAB2ec69124574082676e6F654a18df49A048',
                  identifierOrCriteria: '523',
                  startAmount: '1',
                  endAmount: '1',
                },
              ],
              consideration: [
                {
                  itemType: '1',
                  token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                  identifierOrCriteria: '0',
                  startAmount: '950000000000000000',
                  endAmount: '950000000000000000',
                  recipient: address,
                },
                {
                  itemType: '1',
                  token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                  identifierOrCriteria: '0',
                  startAmount: '50000000000000000',
                  endAmount: '50000000000000000',
                  recipient: '0x2dE038A402119bCbd49A4412c35f27670801eD4e',
                },
              ],
              startTime: '1677839629',
              endTime: '1680514429',
              orderType: '0',
              zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
              zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
              salt: '24446860302761739304752683030156737591518664810215442929813375503150460457858',
              conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
              totalOriginalConsiderationItems: '2',
              counter: '0',
            },
            {
              offerer: address,
              offer: [
                {
                  itemType: '2',
                  token: '0x922dC160f2ab743312A6bB19DD5152C1D3Ecca33',
                  identifierOrCriteria: '176',
                  startAmount: '1',
                  endAmount: '1',
                },
              ],
              consideration: [],
              startTime: '1677839629',
              endTime: '1680514429',
              orderType: '0',
              zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
              zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
              salt: '24446860302761739304752683030156737591518664810215442929814899498239212109405',
              conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
              totalOriginalConsiderationItems: '0',
              counter: '0',
            },
          ],
          [
            {
              offerer: address,
              offer: [
                {
                  itemType: '2',
                  token: '0x922dC160f2ab743312A6bB19DD5152C1D3Ecca33',
                  identifierOrCriteria: '189',
                  startAmount: '1',
                  endAmount: '1',
                },
              ],
              consideration: [],
              startTime: '1677839629',
              endTime: '1680514429',
              orderType: '0',
              zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
              zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
              salt: '24446860302761739304752683030156737591518664810215442929800743236111375197126',
              conduitKey: '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
              totalOriginalConsiderationItems: '0',
              counter: '0',
            },
            {
              offerer: '0x0000000000000000000000000000000000000000',
              zone: '0x0000000000000000000000000000000000000000',
              offer: [],
              consideration: [],
              orderType: '0',
              startTime: '0',
              endTime: '0',
              zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
              salt: '0',
              conduitKey: '0x0000000000000000000000000000000000000000000000000000000000000000',
              counter: '0',
              totalOriginalConsiderationItems: '0',
            },
          ],
        ],
      },
    };

    super('eth_signTypedData_v4', [address, JSON.stringify(data)]);
  }
}
