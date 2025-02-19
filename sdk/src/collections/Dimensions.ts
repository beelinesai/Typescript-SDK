import { Sdk } from '../__generated__/index';

export class Dimensions {
  constructor(private sdk: Sdk) {}

  async create(input: { name: string; description: string; handle: string; metadata?: any }) {
    const result = await this.sdk.createDimension({ input });
    return result.data.createDimension;
  }

  async byIdOrHandle(idOrHandle: string) {
    const result = await this.sdk.dimension({ idOrHandle });
    return result.data.dimension;
  }

  async list() {
    const result = await this.sdk.dimensions();
    return result.data.dimensions;
  }

  async update(id: string, input: { name?: string; description?: string; handle?: string; metadata?: any }) {
    const result = await this.sdk.updateDimension({ id, input });
    return result.data.updateDimension;
  }

  async delete(id: string) {
    const result = await this.sdk.deleteDimension({ id });
    return result.data.deleteDimension;
  }
} 