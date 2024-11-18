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
    const network = await provider.getNetwork();
    const signer = provider.getSigner();

    const addressMap: Record<number, string[]> = {
      [1]: [
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
        '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
        '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // UNI
      ],
      [11155111]: [
        '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
        '0x800eC0D65adb70f0B69B7Db052C6bd89C2406aC4',
        '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
        '0x7EA68721984E8E24932E8928106cA9005B3a4786',
        '0x52eeA312378ef46140EBE67dE8a143BA2304FD7C',
        '0xd98B590ebE0a3eD8C144170bA4122D402182976f',
      ],
    };

    if (!addressMap[network.chainId]) {
      alert(`No support for chainId ${network.chainId}, supported chainIds: ${Object.keys(addressMap).join(', ')}`);
      return;
    }

    const confirmation = confirm(`Are you sure you want to grant fixture approvals for chain ${network.chainId}?`);
    if (!confirmation) return;

    for (const token of addressMap[network.chainId]) {
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
            (Ethereum or Sepolia)
          </>
        )}
      </main>
    </div>
  );
};

export default KitchenSink;
