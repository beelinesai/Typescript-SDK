import { Sdk } from '../__generated__/index';

export class Audiences {
  constructor(private sdk: Sdk) {}

  async create(input: { name: string; description?: string; apiKeyId?: string; pricingModel?: any; metadata?: any }) {
    const result = await this.sdk.createAudience({ input });
    return result.data.createAudience;
  }

  async byId(id: string) {
    const result = await this.sdk.audience({ id });
    return result.data.audience;
  }

  async list() {
    const result = await this.sdk.audiences();
    return result.data.audiences;
  }

  async update(id: string, input: { name?: string; description?: string; pricingModel?: any; metadata?: any }) {
    const result = await this.sdk.updateAudience({ id, input });
    return result.data.updateAudience;
  }

  async delete(id: string) {
    const result = await this.sdk.deleteAudience({ id });
    return result.data.deleteAudience;
  }
} 