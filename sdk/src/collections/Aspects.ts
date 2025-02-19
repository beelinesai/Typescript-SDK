import { Sdk } from '../__generated__/index';

export class Aspects {
  constructor(private sdk: Sdk) {}

  async create(input: { dimensionId: string; name: string; description: string; handle: string; metadata?: any }) {
    const result = await this.sdk.createAspect({ input });
    return result.data.createAspect;
  }

  async byIdOrHandle(idOrHandle: string) {
    const result = await this.sdk.aspect({ idOrHandle });
    return result.data.aspect;
  }

  async list() {
    const result = await this.sdk.aspects();
    return result.data.aspects;
  }

  async update(id: string, input: { name?: string; description?: string; handle?: string; metadata?: any }) {
    const result = await this.sdk.updateAspect({ id, input });
    return result.data.updateAspect;
  }

  async delete(id: string) {
    const result = await this.sdk.deleteAspect({ id });
    return result.data.deleteAspect;
  }
} 