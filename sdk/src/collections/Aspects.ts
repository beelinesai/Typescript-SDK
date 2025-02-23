import type { Sdk } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Aspects {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async byIdOrHandle(idOrHandle: string) {
    return await this.sdk.aspect({ idOrHandle });
  }

  async list() {
    return await this.sdk.aspects();
  }
} 