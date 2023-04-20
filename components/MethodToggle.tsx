import { Method } from '../lib/types';

interface Props {
  method: Method;
  setMethod: (method: Method) => void;
}

const methods = ['request', 'sendAsync', 'sendPromise', 'sendCallback', 'bypass'] as const;

export const MethodToggle = ({ method, setMethod }: Props) => {
  const titles = {
    request: 'ethereum.request',
    sendAsync: 'ethereum.sendAsync',
    sendPromise: 'ethereum.send (promise)',
    sendCallback: 'ethereum.send (callback)',
    bypass: 'bypass (metamask)',
  };

  return (
    <div className="flex flex-col items-start gap-2 border border-black px-4 py-2">
      <h3 className="font-medium">Select request method</h3>
      {methods.map((thisMethod) => (
        <div className="flex gap-2">
          <input
            key={thisMethod}
            type="radio"
            id={thisMethod}
            name={thisMethod}
            value={thisMethod}
            checked={thisMethod === method}
            onChange={(e) => setMethod(e.currentTarget.value as Method)}
          />
          <label htmlFor={thisMethod}>{titles[thisMethod]}</label>
        </div>
      ))}
    </div>
  );
};
