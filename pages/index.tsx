import { providers } from 'ethers';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { buildExampleAllowanceTransaction, buildExampleDaiPermit, buildExampleIncreaseAllowanceTransaction, buildExampleOpenSeaListing, buildExamplePermit, bypass, request, sendAsync, sendCallback, sendPromise } from '../lib/utils';

declare let window: Window & {
  ethereum: any;
};

const KicthenSink: NextPage = () => {
  const [address, setAddress] = useState<string>();

  // useEffect(() => {
  //   window.addEventListener('message', (message) => {
  //   if (message?.data?.target?.includes('metamask') && message?.data?.data?.data?.method === 'eth_sendTransaction') {
  //       // console.warn(message?.data?.data?.name, message?.data?.target, message?.data?.data?.data)
  //       console.log(message)
  //     }
  //   })
  // }, [])

  const connect = async () => {
    const provider = new providers.Web3Provider(window.ethereum);
    const [newAddress] = await provider.listAccounts();
    setAddress(newAddress);
  };

  const allowanceRequest = () => request('eth_sendTransaction', [buildExampleAllowanceTransaction(address)]);
  const allowanceSendCallback = () => sendCallback('eth_sendTransaction', [buildExampleAllowanceTransaction(address)]);
  const allowanceSendPromise = () => sendPromise('eth_sendTransaction', [buildExampleAllowanceTransaction(address)]);
  const allowanceSendAsync = () => sendAsync('eth_sendTransaction', [buildExampleAllowanceTransaction(address)]);
  const allowanceBypass = () => bypass('eth_sendTransaction', [buildExampleAllowanceTransaction(address)]);
  const increaseAllowanceRequest = () => request('eth_sendTransaction', [buildExampleIncreaseAllowanceTransaction(address)]);

  const openseaListingRequest = () => request('eth_signTypedData_v3', [address, JSON.stringify(buildExampleOpenSeaListing(address))]);
  const openseaListingSendCallback = () => sendCallback('eth_signTypedData_v4', [address, JSON.stringify(buildExampleOpenSeaListing(address))]);
  const openseaListingSendPromise = () => sendPromise('eth_signTypedData_v3', [address, JSON.stringify(buildExampleOpenSeaListing(address))]);
  const openseaListingSendAsync = () => sendAsync('eth_signTypedData_v4', [address, JSON.stringify(buildExampleOpenSeaListing(address))]);
  const openseaListingBypass = () => bypass('eth_signTypedData_v3', [address, JSON.stringify(buildExampleOpenSeaListing(address))]);
  const openseaListingNoConsideration = () => request('eth_signTypedData_v3', [address, JSON.stringify(buildExampleOpenSeaListing(address, []))]);

  const permitRequest = () => request('eth_signTypedData_v3', [address, JSON.stringify(buildExampleDaiPermit(address))]);
  const permitSendCallback = () => sendCallback('eth_signTypedData_v4', [address, JSON.stringify(buildExampleDaiPermit(address))]);
  const permitSendPromise = () => sendPromise('eth_signTypedData_v3', [address, JSON.stringify(buildExamplePermit(address))]);
  const permitSendAsync = () => sendAsync('eth_signTypedData_v4', [address, JSON.stringify(buildExamplePermit(address))]);
  const permitBypass = () => bypass('eth_signTypedData_v3', [address, JSON.stringify(buildExamplePermit(address))]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Revoke.cash Browser Extension - Kitchen Sink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center gap-2">
        <button className="border border-black p-2" onClick={connect}>
          {address ?? 'Connect'}
        </button>
        {address && <div>Allowances</div>}
        {address && (
          <>
            <div className="flex w-full items-center justify-center px-20 text-center gap-2">
              <button className="border border-black p-2" onClick={allowanceRequest}>
                ethereum.request
              </button>
              <button className="border border-black p-2" onClick={allowanceSendCallback}>
                ethereum.send (callback)
              </button>
              <button className="border border-black p-2" onClick={allowanceSendPromise}>
                ethereum.send (promise)
              </button>
              <button className="border border-black p-2" onClick={allowanceSendAsync}>
                ethereum.sendAsync
              </button>
              <button className="border border-black p-2" onClick={allowanceBypass}>
                bypass
              </button>
            </div>
            <div>
              <button className="border border-black p-2" onClick={increaseAllowanceRequest}>
                increaseAllowance()
              </button>
            </div>
          </>
        )}
        {address && <div>NFT Listings</div>}
        {address && (
          <>
            <div className="flex w-full items-center justify-center px-20 text-center gap-2">
              <button className="border border-black p-2" onClick={openseaListingRequest}>
                ethereum.request
              </button>
              <button className="border border-black p-2" onClick={openseaListingSendCallback}>
                ethereum.send (callback)
              </button>
              <button className="border border-black p-2" onClick={openseaListingSendPromise}>
                ethereum.send (promise)
              </button>
              <button className="border border-black p-2" onClick={openseaListingSendAsync}>
                ethereum.sendAsync
              </button>
              <button className="border border-black p-2" onClick={openseaListingBypass}>
                bypass
              </button>
            </div>
            <div>
              <button className="border border-black p-2" onClick={openseaListingNoConsideration}>
                empty consideration
              </button>
            </div>
          </>
        )}
        {address && <div>Permit</div>}
        {address && (
          <div className="flex w-full items-center justify-center px-20 text-center gap-2">
            <button className="border border-black p-2" onClick={permitRequest}>
              ethereum.request
            </button>
            <button className="border border-black p-2" onClick={permitSendCallback}>
              ethereum.send (callback)
            </button>
            <button className="border border-black p-2" onClick={permitSendPromise}>
              ethereum.send (promise)
            </button>
            <button className="border border-black p-2" onClick={permitSendAsync}>
              ethereum.sendAsync
            </button>
            <button className="border border-black p-2" onClick={permitBypass}>
              bypass
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default KicthenSink;
