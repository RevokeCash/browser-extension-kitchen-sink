declare let window: Window & {
  ethereum: any;
};

export const request = async (method: string, params: any[]) => {
  try {
    const res = await window.ethereum.request({ method, params });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const sendCallback = async (method: string, params: any[]) => {
  window.ethereum.send({ method, params }, (err: any, res: any) => {
    console.log('err', err);
    console.log('res', res);
  });
};

export const sendPromise = async (method: string, params: any[]) => {
  try {
    const res = await window.ethereum.send(method, params);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const sendAsync = async (method: string, params: any[]) => {
  window.ethereum.sendAsync({ method, params }, (err: any, res: any) => {
    console.log('err', err);
    console.log('res', res);
  });
};

export const bypass = async (method: string, params: any[]) => {
  window.postMessage({
    target: 'metamask-contentscript',
    data: {
      name: 'metamask-provider',
      data: { method, params },
    },
  });
};
