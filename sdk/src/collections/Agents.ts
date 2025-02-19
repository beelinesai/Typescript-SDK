import { Sdk } from '../__generated__/index';

export class Agents {
  constructor(private sdk: Sdk) {}

  async create(developerId: string, input: { name: string; characterData?: any; audienceId?: string }) {
    const result = await this.sdk.createAgent({ developerId, input });
    return result.data.createAgent;
  }

  async byId(id: string, developerId: string) {
    const result = await this.sdk.agent({ id, developerId });
    return result.data.agent;
  }

  async list(developerId: string) {
    const result = await this.sdk.agents({ developerId });
    return result.data.agents;
  }

  async update(id: string, developerId: string, input: { name?: string }) {
    const result = await this.sdk.updateAgent({ id, developerId, input });
    return result.data.updateAgent;
  }

  async delete(id: string, developerId: string) {
    const result = await this.sdk.deleteAgent({ id, developerId });
    return result.data.deleteAgent;
  }
}
