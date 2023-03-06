import { Fixture } from '../lib/fixtures/Fixture';

type Method = 'request' | 'sendAsync' | 'sendPromise' | 'sendCallback' | 'bypass';

interface Props {
  title: string;
  method: Method;
  fixture: Fixture;
}

export const SingleFixture = ({ title, method, fixture }: Props) => {
  return (
    <button className="border border-black p-2" onClick={() => fixture[method]()}>
      {title}
    </button>
  );
};
