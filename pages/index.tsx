import { providers } from 'ethers';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FixtureCategory } from '../components/FixtureCategory';
import { MethodToggle } from '../components/MethodToggle';
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-start px-20 text-center gap-2">
        <button className="border border-black p-2" onClick={connect}>
          {address ?? 'Connect'}
        </button>

        {address && <MethodToggle method={method} setMethod={setMethod} />}

        {address && (
          <>
            <FixtureCategory title="Allowances">
              <SingleFixture title="approve()" fixture={new ApproveFixture(address)} method={method} />
              <SingleFixture title="increaseAllowance()" fixture={new IncreaseAllowanceFixture(address)} method={method} />
              <SingleFixture title="setApprovalForAll()" fixture={new SetApprovalForAllFixture(address)} method={method} />
              <SingleFixture title="TODO: Permit2 approve()" fixture={new Permit2ApproveFixture(address)} method={method} />
            </FixtureCategory>

            <FixtureCategory title="Permit">
              <SingleFixture title="Permit" fixture={new PermitFixture(address)} method={method} />
              <SingleFixture title="Permit2 Single" fixture={new Permit2SingleFixture(address)} method={method} />
              <SingleFixture title="Permit2 Batch" fixture={new Permit2BatchFixture(address)} method={method} />
              <SingleFixture title="PermitForAll" fixture={new PermitForAllFixture(address)} method={method} />
              <SingleFixture title="Permit (DAI + eth_signTypedData_v3)" fixture={new DaiPermitFixture(address)} method={method} />
            </FixtureCategory>

            <FixtureCategory title="NFT Listings">
              <SingleFixture title="Seaport v1" fixture={new Seaport1Fixture(address)} method={method} />
              <SingleFixture title="Seaport v1 (empty consideration)" fixture={new Seaport1Fixture(address, [])} method={method} />
              <SingleFixture title="Seaport v1.4 (bulk)" fixture={new Seaport14Fixture(address)} method={method} />
              <SingleFixture title="LooksRare" fixture={new LooksRareFixture(address)} method={method} />
              <SingleFixture title="Blur" fixture={new BlurFixture(address)} method={method} />
              <SingleFixture title="Blur (bulk)" fixture={new BlurBulkFixture(address)} method={method} />
            </FixtureCategory>

            <FixtureCategory title="Untyped Signatures">
              <SingleFixture title="eth_sign" fixture={new EthSignFixture(address)} method={method} />
              <SingleFixture title="personal_sign" fixture={new PersonalSignFixture(address)} method={method} />
            </FixtureCategory>

            <FixtureCategory title="Suspected Scams">
              <SingleFixture title='"security updates"' fixture={new SecurityUpdatesFixture(address)} method={method} />
            </FixtureCategory>

            <FixtureCategory title="Meta Transactions">
              <SingleFixture title="Biconomy Native" fixture={new BiconomyNativeFixture(address)} method={method} />
              <SingleFixture title="TODO: Biconomy Forwarder" fixture={new BiconomyForwarderFixture(address)} method={method} />
              <SingleFixture title="GSN Relay" fixture={new GsnRelayFixture(address)} method={method} />
            </FixtureCategory>
          </>
        )}
      </main>
    </div>
  );
};

export default KitchenSink;
