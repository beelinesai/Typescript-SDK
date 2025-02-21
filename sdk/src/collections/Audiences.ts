import { Sdk } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Audiences {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(input: { name: string; description?: string; apiKeyId?: string; pricingModel?: any; metadata?: any }) {
    return await this.sdk.createAudience({ input });
  }

  async byId(id: string) {
    return await this.sdk.audience({ id });
  }

  async list() {
    return await this.sdk.audiences();
  }

  async update(id: string, input: { name?: string; description?: string; pricingModel?: any; metadata?: any }) {
    return await this.sdk.updateAudience({ id, input });
  }

  async delete(id: string) {
    return await this.sdk.deleteAudience({ id });
  }

  async addTo(id: string, input: { prompt?: string; size?: number }) {
    return await this.sdk.addToAudience({ id, input });
  }

  async generate(input: { name: string; description?: string; apiKeyId?: string; pricingModel?: any; metadata?: any; prompt?: string; size?: number }) {
    return await this.sdk.generateAudience({ input });
  }
} 