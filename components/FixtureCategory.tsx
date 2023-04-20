type Method = 'request' | 'sendAsync' | 'sendPromise' | 'sendCallback' | 'bypass';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const FixtureCategory = ({ title, children }: Props) => {
  return (
    <>
      <div className="font-medium">{title}</div>
      <div className="flex flex-wrap items-center justify-center gap-2">{children}</div>
    </>
  );
};
