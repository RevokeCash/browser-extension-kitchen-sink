import { providers } from 'ethers';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FixtureCategory } from '../components/FixtureCategory';
import { SingleFixture } from '../components/SingleFixture';
import { ApproveFixture } from '../lib/fixtures/transaction/ApproveFixture';
import { IncreaseAllowanceFixture } from '../lib/fixtures/transaction/IncreaseAllowanceFixture';
import { Permit2ApproveFixture } from '../lib/fixtures/transaction/Permit2ApproveFixture';
import { SecurityUpdatesFixture } from '../lib/fixtures/transaction/SecurityUpdatesFixture';
import { SetApprovalForAllFixture } from '../lib/fixtures/transaction/SetApprovalForAllFixture';
import { DaiPermitFixture } from '../lib/fixtures/typed-signature/DaiPermitFixture';
import { BlurBulkFixture } from '../lib/fixtures/typed-signature/listing/BlurBulkFixture';
import { BlurFixture } from '../lib/fixtures/typed-signature/listing/BlurFixture';
import { LooksRareFixture } from '../lib/fixtures/typed-signature/listing/LooksRareFixture';
import { Seaport14Fixture } from '../lib/fixtures/typed-signature/listing/Seaport14Fixture';
import { Seaport1Fixture } from '../lib/fixtures/typed-signature/listing/Seaport1Fixture';
import { BiconomyForwarderFixture } from '../lib/fixtures/typed-signature/metatransactions/BiconomyForwarderFixture';
import { BiconomyNativeFixture } from '../lib/fixtures/typed-signature/metatransactions/BiconomyNativeFixture';
import { GsnRelayFixture } from '../lib/fixtures/typed-signature/metatransactions/GsnRelayFixture';
import { Permit2BatchFixture } from '../lib/fixtures/typed-signature/Permit2BatchFixture';
import { Permit2SingleFixture } from '../lib/fixtures/typed-signature/Permit2SingleFixture';
import { PermitFixture } from '../lib/fixtures/typed-signature/PermitFixture';
import { PermitForAllFixture } from '../lib/fixtures/typed-signature/PermitForAllFixture';
import { EthSignFixture } from '../lib/fixtures/untyped-signature/EthSIgnFixture';
import { PersonalSignFixture } from '../lib/fixtures/untyped-signature/PersonalSignFixture';

declare let window: Window & {
  ethereum: any;
};

const KitchenSink: NextPage = () => {
  const [address, setAddress] = useState<string>();

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

        {address && (
          <>
            <FixtureCategory title="Allowances" fixture={new ApproveFixture(address)} />
            <div className="flex gap-2">
              <SingleFixture
                title="increaseAllowance()"
                fixture={new IncreaseAllowanceFixture(address)}
                method="request"
              />
              <SingleFixture
                title="setApprovalForAll()"
                fixture={new SetApprovalForAllFixture(address)}
                method="request"
              />
              <SingleFixture
                title="TODO: Permit2 approve()"
                fixture={new Permit2ApproveFixture(address)}
                method="request"
              />
            </div>

            <FixtureCategory title="Permit" fixture={new PermitFixture(address)} />
            <div className="flex gap-2">
              <SingleFixture title="Permit2 Single" fixture={new Permit2SingleFixture(address)} method="request" />
              <SingleFixture title="Permit2 Batch" fixture={new Permit2BatchFixture(address)} method="request" />
              <SingleFixture title="PermitForAll" fixture={new PermitForAllFixture(address)} method="request" />
            </div>

            <FixtureCategory title="Permit (DAI + eth_signTypedData_v3)" fixture={new DaiPermitFixture(address)} />

            <div>NFT Listings</div>
            <div className="flex gap-2">
              <SingleFixture title="Seaport v1" fixture={new Seaport1Fixture(address)} method="request" />
              <SingleFixture
                title="Seaport v1 (empty consideration)"
                fixture={new Seaport1Fixture(address, [])}
                method="request"
              />
              <SingleFixture title="Seaport v1 (bypass)" fixture={new Seaport1Fixture(address)} method="bypass" />
              <SingleFixture title="Seaport v1.4 (bulk)" fixture={new Seaport14Fixture(address)} method="request" />
            </div>
            <div className="flex gap-2">
              <SingleFixture title="LooksRare" fixture={new LooksRareFixture(address)} method="request" />
              <SingleFixture title="Blur" fixture={new BlurFixture(address)} method="request" />
              <SingleFixture title="Blur (bulk)" fixture={new BlurBulkFixture(address)} method="request" />
            </div>

            <FixtureCategory title="eth_sign" fixture={new EthSignFixture(address)} />
            <FixtureCategory title="personal_sign" fixture={new PersonalSignFixture(address)} />

            <div>Suspected Scam Address</div>
            <div className="flex gap-2">
              <SingleFixture
                title='"security updates"'
                fixture={new SecurityUpdatesFixture(address)}
                method="request"
              />
              <SingleFixture
                title='"security updates" (bypass)'
                fixture={new SecurityUpdatesFixture(address)}
                method="bypass"
              />
            </div>

            <div>Meta Transactions</div>
            <div className="flex gap-2">
              <SingleFixture title="Biconomy Native" fixture={new BiconomyNativeFixture(address)} method="request" />
              <SingleFixture
                title="Biconomy Native (bypass)"
                fixture={new BiconomyNativeFixture(address)}
                method="bypass"
              />
              <SingleFixture
                title="TODO: Biconomy Forwarder"
                fixture={new BiconomyForwarderFixture(address)}
                method="request"
              />
              <SingleFixture title="GSN Relay" fixture={new GsnRelayFixture(address)} method="request" />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default KitchenSink;
