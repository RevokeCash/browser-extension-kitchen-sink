import { providers } from 'ethers'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

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

  // Approve a 100 DAI allowance to Uniswap
  const buildExampleAllowanceTransaction = () => ({
    from: address,
    to: '0x6b175474e89094c44da98b954eedeac495271d0f',
    data: '0x095ea7b30000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d0000000000000000000000000000000000000000000000056bc75e2d63100000'
  })

  const allowanceRequest = async () => {
    try {
      const res = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [buildExampleAllowanceTransaction()]
      })
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }

  const allowanceSendCallback = async () => {
    window.ethereum.send(
      { method: 'eth_sendTransaction', params: [buildExampleAllowanceTransaction()] },
      (err: any, res: any) => {
        console.log('err', err);
        console.log('res', res);
      }
    )
  }

  const allowanceSendPromise = async () => {
    try {
      const res = await window.ethereum.send('eth_sendTransaction', [buildExampleAllowanceTransaction()]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  const allowanceSendAsync = async () => {
    window.ethereum.sendAsync({
      method: 'eth_sendTransaction',
      params: [buildExampleAllowanceTransaction()]
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
          params: [buildExampleAllowanceTransaction()]
        }
      }
    })
  }

  const openSeaListingRequest = async () => {
    const typedData = {
      types: {
        OrderComponents: [
          { name: "offerer", type: "address" },
          { name: "zone", type: "address" },
          { name: "offer", type: "OfferItem[]" },
          { name: "consideration", type: "ConsiderationItem[]" },
          { name: "orderType", type: "uint8" },
          { name: "startTime", type: "uint256" },
          { name: "endTime", type: "uint256" },
          { name: "zoneHash", type: "bytes32" },
          { name: "salt", type: "uint256" },
          { name: "conduitKey", type: "bytes32" },
          { name: "counter", type: "uint256" }
        ],
        OfferItem: [
          { name: "itemType", type: "uint8" },
          { name: "token", type: "address" },
          { name: "identifierOrCriteria", type: "uint256" },
          { name: "startAmount", type: "uint256" },
          { name: "endAmount", type: "uint256" }
        ],
        ConsiderationItem: [
          { name: "itemType", type: "uint8" },
          { name: "token", type: "address" },
          { name: "identifierOrCriteria", type: "uint256" },
          { name: "startAmount", type: "uint256" },
          { name: "endAmount", type: "uint256" },
          { name: "recipient", type: "address" }
        ],
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" }
        ]
      },
      domain: { name: "Seaport", version: "1.1", chainId: "1", verifyingContract: "0x00000000006c3852cbef3e08e8df289169ede581" },
      primaryType: "OrderComponents",
      message: {
        offerer: address,
        zone: "0x004c00500000ad104d7dbd00e3ae0a5c00560c00",
        offer: [
          {itemType: "2", token: "0x922dc160f2ab743312a6bb19dd5152c1d3ecca33", identifierOrCriteria: "176", startAmount: "1", endAmount: "1" }
        ],
        consideration: [
          { itemType: "0", token: "0x0000000000000000000000000000000000000000", identifierOrCriteria: "0", startAmount: "925000000000000000", endAmount: "925000000000000000", recipient: address },
          { itemType: "0", token: "0x0000000000000000000000000000000000000000", identifierOrCriteria: "0", startAmount: "25000000000000000", endAmount: "25000000000000000", recipient: "0x8de9c5a032463c561423387a9648c5c7bcc5bc90" },
          { itemType: "0", token: "0x0000000000000000000000000000000000000000", identifierOrCriteria: "0", startAmount: "50000000000000000", endAmount: "50000000000000000", recipient: "0x5c6139cd9ff1170197f13935c58f825b422c744c" }
        ],
        orderType: "3",
        startTime: "1660565524",
        endTime: "1661170320",
        zoneHash: "0x3000000000000000000000000000000000000000000000000000000000000000",
        salt: "5965482869793190759363249887602871532",
        conduitKey: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
        counter: "0",
      }
    };

    try {
      const res = await window.ethereum.request({
        method: 'eth_signTypedData_v4',
        params: [address, JSON.stringify(typedData)]
      })
      console.log(res);
    } catch (err) {
      console.log(err)
    }
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
          <button className='border border-black p-2' onClick={openSeaListingRequest}>test</button>
          {/* <button className='border border-black p-2' onClick={allowanceSendCallback}>ethereum.send (callback)</button>
          <button className='border border-black p-2' onClick={allowanceSendPromise}>ethereum.send (promise)</button>
          <button className='border border-black p-2' onClick={allowanceSendAsync}>ethereum.sendAsync</button>
          <button className='border border-black p-2' onClick={allowanceBypass}>bypass</button> */}
        </div>}
      </main>
    </div>
  )
}

export default KicthenSink
