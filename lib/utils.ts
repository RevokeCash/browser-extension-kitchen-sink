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

export const arrayBypass = async (method: string, params: any[]) => {
  window.postMessage({
    target: 'metamask-contentscript',
    data: {
      name: 'metamask-provider',
      data: [{ method, params }],
    },
  });
};

export const coinbaseBypass = async (method: string, params: any[]) => {
  window.postMessage({
    type: 'extensionUIRequest',
    data: getCoinbaseBypassData(method, params),
  });
};

const getCoinbaseBypassData = (method: string, params: any[]) => {
  const common = {
    id: 'ec3c32868d5c55c39c871cf5794f13cb0x2',
    dappInfo: {
      dappLogoURL: `${window.location.href}favicon.ico`,
    },
  };

  if (method === 'eth_sendTransaction') {
    return {
      action: 'signEthereumTransaction',
      ...common,
      request: {
        method: 'signEthereumTransaction',
        params: {
          fromAddress: params[0].from,
          toAddress: params[0].to,
          data: params[0].data,
          weiValue: Number.parseInt(params[0].value ?? '0', 16).toString(10),
          chainId: params[0].chainId ?? 1,
          shouldSubmit: true,
          nonce: null,
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
          gasPriceInWei: null,
          gasLimit: null,
        },
      },
    };
  }

  if (method === 'eth_signTypedData_v4' || method === 'eth_signTypedData_v3') {
    return {
      action: 'signEthereumMessage',
      ...common,
      request: {
        method: 'signEthereumMessage',
        params: {
          // Note: this will not work because we need a hash of the data somehow
          typedDataJson: params[1],
          address: params[0],
        },
      },
    };
  }

  if (method === 'personal_sign' || method === 'eth_sign') {
    return {
      action: 'signEthereumMessage',
      ...common,
      request: {
        method: 'signEthereumMessage',
        params: {
          message: params[1],
          address: params[0],
          addPrefix: method === 'personal_sign',
        },
      },
    };
  }
};
