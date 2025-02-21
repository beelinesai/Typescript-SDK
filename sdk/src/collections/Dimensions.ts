import type { CreateDimensionInput, Sdk, UpdateDimensionInput } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Dimensions {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(input: CreateDimensionInput) {
    return await this.sdk.createDimension({ input });
  }

  async byIdOrHandle(idOrHandle: string) {
    return await this.sdk.dimension({ idOrHandle });
  }

  async list() {
    return await this.sdk.dimensions();
  }

  async update(id: string, input: UpdateDimensionInput) {
    return await this.sdk.updateDimension({ id, input });
  }

  async delete(id: string) {
    return await this.sdk.deleteDimension({ id });
  }
} 