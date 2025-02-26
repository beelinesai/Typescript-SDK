import type { Sdk, CreateAgentInput, UpdateAgentInput, GenerateAgentsInput } from '../__generated__/index';
import { WrappedSdk } from '../types';
import type { Character, CharacterConfig } from "@ai16z/eliza";


export class Agents {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(developerId: string, input: CreateAgentInput) {
    return await this.sdk.createAgent({ developerId, input });
  }

  async byId(id: string, developerId: string) {
    return await this.sdk.agent({ id, developerId });
  }

  async list(developerId: string) {
    return await this.sdk.agents({ developerId });
  }

  async update(id: string, developerId: string, input: UpdateAgentInput) {
    return await this.sdk.updateAgent({ id, developerId, input });
  }

  async delete(id: string, developerId: string) {
    return await this.sdk.deleteAgent({ id, developerId });
  }

  async generate(developerId: string, input: GenerateAgentsInput) {
    return await this.sdk.generateAgents({ developerId, input });
  }

  async importEliza(developerId: string, input: Character | CharacterConfig) {
    return await this.sdk.importElizaAgent({ developerId, input });
  }
}
