import { providers } from 'ethers'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { buildExampleAllowanceTransaction, buildExampleOpenSeaListing } from '../lib/utils'

declare let window: Window & {
  ethereum: any;
}

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
  }

  const allowanceRequest = async () => {
    try {
      const res = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [buildExampleAllowanceTransaction(address)]
      })
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }

  const allowanceSendCallback = async () => {
    window.ethereum.send(
      { method: 'eth_sendTransaction', params: [buildExampleAllowanceTransaction(address)] },
      (err: any, res: any) => {
        console.log('err', err);
        console.log('res', res);
      }
    )
  }

  const allowanceSendPromise = async () => {
    try {
      const res = await window.ethereum.send('eth_sendTransaction', [buildExampleAllowanceTransaction(address)]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  const allowanceSendAsync = async () => {
    window.ethereum.sendAsync({
      method: 'eth_sendTransaction',
      params: [buildExampleAllowanceTransaction(address)]
    }, (err: any, res: any) => {
      console.log('err', err);
      console.log('res', res);
    })
  }

  const allowanceBypass = async () => {
    window.postMessage({
      target: 'metamask-contentscript',
      data: {
        name: 'metamask-provider',
        data: {
          method: 'eth_sendTransaction',
          params: [buildExampleAllowanceTransaction(address)]
        }
      }
    })
  }

  const openseaListingRequest = async () => {
    try {
      const res = await window.ethereum.request({
        method: 'eth_signTypedData_v3',
        params: [address, JSON.stringify(buildExampleOpenSeaListing(address))]
      })
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }

  const openseaListingSendCallback = async () => {
    window.ethereum.send(
      { method: 'eth_signTypedData_v4', params: [address, JSON.stringify(buildExampleOpenSeaListing(address))] },
      (err: any, res: any) => {
        console.log('err', err);
        console.log('res', res);
      }
    )
  }

  const openseaListingSendPromise = async () => {
    try {
      const res = await window.ethereum.send('eth_signTypedData_v3', [address, JSON.stringify(buildExampleOpenSeaListing(address))]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  const openseaListingSendAsync = async () => {
    window.ethereum.sendAsync({
      method: 'eth_signTypedData_v4',
      params: [address, JSON.stringify(buildExampleOpenSeaListing(address))]
    }, (err: any, res: any) => {
      console.log('err', err);
      console.log('res', res);
    })
  }

  const openseaListingBypass = async () => {
    window.postMessage({
      target: 'metamask-contentscript',
      data: {
        name: 'metamask-provider',
        data: {
          method: 'eth_signTypedData_v3',
          params: [address, JSON.stringify(buildExampleOpenSeaListing(address))]
        }
      }
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Revoke.cash Browser Extension - Kitchen Sink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center gap-2">
        <button className='border border-black p-2' onClick={connect}>{address ?? 'Connect'}</button>
        {address && <div>Allowances</div>}
        {address && <div className="flex w-full items-center justify-center px-20 text-center gap-2">
          <button className='border border-black p-2' onClick={allowanceRequest}>ethereum.request</button>
          <button className='border border-black p-2' onClick={allowanceSendCallback}>ethereum.send (callback)</button>
          <button className='border border-black p-2' onClick={allowanceSendPromise}>ethereum.send (promise)</button>
          <button className='border border-black p-2' onClick={allowanceSendAsync}>ethereum.sendAsync</button>
          <button className='border border-black p-2' onClick={allowanceBypass}>bypass</button>
        </div>}
        {address && <div>NFT Listings</div>}
        {address && <div className="flex w-full items-center justify-center px-20 text-center gap-2">
          <button className='border border-black p-2' onClick={openseaListingRequest}>ethereum.request</button>
          <button className='border border-black p-2' onClick={openseaListingSendCallback}>ethereum.send (callback)</button>
          <button className='border border-black p-2' onClick={openseaListingSendPromise}>ethereum.send (promise)</button>
          <button className='border border-black p-2' onClick={openseaListingSendAsync}>ethereum.sendAsync</button>
          <button className='border border-black p-2' onClick={openseaListingBypass}>bypass</button>
        </div>}
      </main>
    </div>
  )
}

export default KicthenSink
