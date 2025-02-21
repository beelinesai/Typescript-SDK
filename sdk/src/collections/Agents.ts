import type { Sdk } from '../__generated__/index';
import { WrappedSdk } from '../types';
import type { Character } from "@ai16z/eliza";

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

  async generate(developerId: string, input: { quantity?: number }) {
    return await this.sdk.generateAgents({ developerId, input });
  }

  async importEliza(developerId: string, input: Character) {
    return await this.sdk.importElizaAgent({ developerId, input });
  }
}
