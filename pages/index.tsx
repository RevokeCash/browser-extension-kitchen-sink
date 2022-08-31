import { providers } from 'ethers';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { buildExampleAllowanceTransaction, buildExampleDaiPermit, buildExampleIncreaseAllowanceTransaction, buildExampleLooksRareListing, buildExampleOpenSeaListing, buildExamplePermit, bypass, request, sendAsync, sendCallback, sendPromise } from '../lib/utils';

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
    const provider = new providers.Web3Provider(window.ethereum, 'any');
    const [newAddress] = await provider.send('eth_requestAccounts', []);
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
  const looksRareListing = () => request('eth_signTypedData_v4', [address, JSON.stringify(buildExampleLooksRareListing(address))]);

  const permitRequest = () => request('eth_signTypedData_v3', [address, JSON.stringify(buildExampleDaiPermit(address))]);
  const permitSendCallback = () => sendCallback('eth_signTypedData_v4', [address, JSON.stringify(buildExampleDaiPermit(address))]);
  const permitSendPromise = () => sendPromise('eth_signTypedData_v3', [address, JSON.stringify(buildExamplePermit(address))]);
  const permitSendAsync = () => sendAsync('eth_signTypedData_v4', [address, JSON.stringify(buildExamplePermit(address))]);
  const permitBypass = () => bypass('eth_signTypedData_v3', [address, JSON.stringify(buildExamplePermit(address))]);

  const ethSignRequest = () => request('eth_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  const ethSignSendCallback = () => sendCallback('eth_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  const ethSignSendPromise = () => sendPromise('eth_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  const ethSignSendAsync = () => sendAsync('eth_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  const ethSignBypass = () => bypass('eth_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);

  const personalSignRequest = () => request('personal_sign', ['0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4', address]);
  const personalSignSendCallback = () => sendCallback('personal_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  const personalSignSendPromise = () => sendPromise('personal_sign', ['0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4', address]);
  const personalSignSendAsync = () => sendAsync('personal_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);
  const personalSignBypass = () => bypass('personal_sign', [address, '0x797d5b9bd6fb2c70d000491ad03b9f872f8f928eb2c4326add81969094eef2e4']);

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
            <div className="flex w-full items-center justify-center px-20 text-center gap-2">
              <button className="border border-black p-2" onClick={openseaListingNoConsideration}>
                empty consideration
              </button>
              <button className="border border-black p-2" onClick={looksRareListing}>
                looksrare
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
        {address && <div>eth_sign</div>}
        {address && (
          <div className="flex w-full items-center justify-center px-20 text-center gap-2">
            <button className="border border-black p-2" onClick={ethSignRequest}>
              ethereum.request
            </button>
            <button className="border border-black p-2" onClick={ethSignSendCallback}>
              ethereum.send (callback)
            </button>
            <button className="border border-black p-2" onClick={ethSignSendPromise}>
              ethereum.send (promise)
            </button>
            <button className="border border-black p-2" onClick={ethSignSendAsync}>
              ethereum.sendAsync
            </button>
            <button className="border border-black p-2" onClick={ethSignBypass}>
              bypass
            </button>
          </div>
        )}
        {address && <div>personal_sign</div>}
        {address && (
          <div className="flex w-full items-center justify-center px-20 text-center gap-2">
            <button className="border border-black p-2" onClick={personalSignRequest}>
              ethereum.request
            </button>
            <button className="border border-black p-2" onClick={personalSignSendCallback}>
              ethereum.send (callback)
            </button>
            <button className="border border-black p-2" onClick={personalSignSendPromise}>
              ethereum.send (promise)
            </button>
            <button className="border border-black p-2" onClick={personalSignSendAsync}>
              ethereum.sendAsync
            </button>
            <button className="border border-black p-2" onClick={personalSignBypass}>
              bypass
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default KicthenSink;
