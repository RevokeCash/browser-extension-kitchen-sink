import { providers } from 'ethers';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Method } from '../lib/types';

declare let window: Window & {
  ethereum: any;
};

const KitchenSink: NextPage = () => {
  const [address, setAddress] = useState<string>();
  const [method, setMethod] = useState<Method>('request');

  useEffect(() => {
    const connectIfAlreadyConnectedBefore = async () => {
      const provider = new providers.Web3Provider(window.ethereum, 'any');
      const [connectedAddress] = await provider.listAccounts();
      if (connectedAddress) setAddress(connectedAddress);
    };
    connectIfAlreadyConnectedBefore();
  }, []);

  const connect = async () => {
    const provider = new providers.Web3Provider(window.ethereum, 'any');
    const [newAddress] = await provider.send('eth_requestAccounts', []);
    setAddress(newAddress);
  };

  // Only execute on Sepolia
  const grantFixtureApprovals = async () => {
    const provider = new providers.Web3Provider(window.ethereum, 'any');
    const signer = provider.getSigner();

    const erc20Tokens = [
      '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
      '0x800eC0D65adb70f0B69B7Db052C6bd89C2406aC4',
      '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
      '0x7EA68721984E8E24932E8928106cA9005B3a4786',
      '0x52eeA312378ef46140EBE67dE8a143BA2304FD7C',
      '0xd98B590ebE0a3eD8C144170bA4122D402182976f',
    ];

    for (const token of erc20Tokens) {
      signer.sendTransaction({
        to: token,
        data: '0x095EA7B30000000000000000000000007A250D5630B4CF539739DF2C5DACB4C659F2488D0000000000000000000000000000000000000000000000056BC75E2D63100000',
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center gap-2">
        <button className="border border-black p-2" onClick={connect}>
          {address ?? 'Connect'}
        </button>

        {address && (
          <>
            <button className="border border-black p-2" onClick={grantFixtureApprovals}>
              {'Grant Fixture Approvals'}
            </button>
            (make sure you're connected to sepolia)
          </>
        )}
      </main>
    </div>
  );
};

export default KitchenSink;
