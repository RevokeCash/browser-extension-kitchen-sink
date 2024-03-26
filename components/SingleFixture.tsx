import { Fixture } from '../lib/fixtures/Fixture';
import { Method } from '../lib/types';

interface Props {
  title: string;
  method: Method;
  fixture: Fixture;
}

export const SingleFixture = ({ title, method, fixture }: Props) => {
  return (
    <button className="border border-black px-3 py-1 rounded-lg" onClick={() => fixture[method]()}>
      {title}
    </button>
  );
};
