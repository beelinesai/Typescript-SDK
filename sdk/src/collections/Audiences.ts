import type { Sdk, CreateAudienceInput, UpdateAudienceInput, GenerateAudienceInput, AddToAudienceInput } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Audiences {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(input: CreateAudienceInput) {
    return await this.sdk.createAudience({ input });
  }

  async available() {
    return await this.sdk.availableAudiences();
  }

  async byId(id: string) {
    return await this.sdk.audience({ id });
  }

  async list() {
    return await this.sdk.audiences();
  }

  async update(id: string, input: UpdateAudienceInput) {
    return await this.sdk.updateAudience({ id, input });
  }

  async delete(id: string) {
    return await this.sdk.deleteAudience({ id });
  }

  async addTo(id: string, input: AddToAudienceInput) {
    return await this.sdk.addToAudience({ id, input });
  }

  async generate(input: GenerateAudienceInput) {
    return await this.sdk.generateAudience({ input });
  }
} 