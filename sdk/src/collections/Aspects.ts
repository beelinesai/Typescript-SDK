import { Sdk } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Aspects {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(input: { dimensionId: string; name: string; description: string; handle: string; metadata?: any }) {
    return await this.sdk.createAspect({ input });
  }

  async byIdOrHandle(idOrHandle: string) {
    return await this.sdk.aspect({ idOrHandle });
  }

  async list() {
    return await this.sdk.aspects();
  }

  async update(id: string, input: { name?: string; description?: string; handle?: string; metadata?: any }) {
    return await this.sdk.updateAspect({ id, input });
  }

  async delete(id: string) {
    return await this.sdk.deleteAspect({ id });
  }
} 