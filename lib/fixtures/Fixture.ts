import { bypass, request, sendAsync, sendCallback, sendPromise } from '../utils';

export class Fixture {
  constructor(public method: string, public params: any[]) {}

  request() {
    return request(this.method, this.params);
  }

  sendAsync() {
    return sendAsync(this.method, this.params);
  }

  sendPromise() {
    return sendPromise(this.method, this.params);
  }

  sendCallback() {
    return sendCallback(this.method, this.params);
  }

  bypass() {
    return bypass(this.method, this.params);
  }
}
