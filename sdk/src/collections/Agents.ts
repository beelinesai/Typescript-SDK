import type { Sdk } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Agents {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(developerId: string, input: { name: string; characterData?: any; audienceId?: string }) {
    return await this.sdk.createAgent({ developerId, input });
  }

  async byId(id: string, developerId: string) {
    return await this.sdk.agent({ id, developerId });
  }

  async list(developerId: string) {
    return await this.sdk.agents({ developerId });
  }

  async update(id: string, developerId: string, input: { name?: string }) {
    return await this.sdk.updateAgent({ id, developerId, input });
  }

  async delete(id: string, developerId: string) {
    return await this.sdk.deleteAgent({ id, developerId });
  }
}
