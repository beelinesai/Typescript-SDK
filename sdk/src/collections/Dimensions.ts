import type { CreateDimensionInput, Sdk, UpdateDimensionInput } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Dimensions {
  constructor(private sdk: WrappedSdk<Sdk>) {}
  
  async byIdOrHandle(idOrHandle: string) {
    return await this.sdk.dimension({ idOrHandle });
  }

  async list() {
    return await this.sdk.dimensions();
  }
} 