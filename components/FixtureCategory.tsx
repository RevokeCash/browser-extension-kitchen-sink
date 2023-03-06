import { Fixture } from '../lib/fixtures/Fixture';
import { SingleFixture } from './SingleFixture';

type Method = 'request' | 'sendAsync' | 'sendPromise' | 'sendCallback' | 'bypass';

interface Props {
  title: string;
  methods?: Method[];
  fixture: Fixture;
}

export const FixtureCategory = ({ title, methods: passedMethods, fixture }: Props) => {
  const methods = passedMethods ?? ['request', 'sendAsync', 'sendPromise', 'sendCallback', 'bypass'];

  const titles = {
    request: 'ethereum.request',
    sendAsync: 'ethereum.sendAsync',
    sendPromise: 'ethereum.send (promise)',
    sendCallback: 'ethereum.send (callback)',
    bypass: 'bypass',
  };

  return (
    <>
      <div>{title}</div>
      <div className="flex w-full items-center justify-center px-20 text-center gap-2">
        {methods.map((method) => (
          <SingleFixture key={method} method={method} fixture={fixture} title={titles[method]} />
        ))}
      </div>
    </>
  );
};
