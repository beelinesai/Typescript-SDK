import { Sdk } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Personality {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  // Trait Operations
  async create(input: { aspectId: string; name: string; description: string; metadata?: any; isPublic?: boolean }) {
    return await this.sdk.createTrait({ input });
  }

  async byTraitId(id: string) {
    return await this.sdk.trait({ id });
  }

  async listTraits() {
    return await this.sdk.traits();
  }

  async updateTrait(id: string, input: { name?: string; description?: string; metadata?: any }) {
    return await this.sdk.updateTrait({ id, input });
  }

  async deleteTrait(id: string) {
    return await this.sdk.deleteTrait({ id });
  }

  // Semantic Knowledge Operations
  async addSemanticKnowledge(agentId: string, items: { type: string; content: string; context?: string; metadata?: any }[]) {
    return await this.sdk.addSemanticKnowledge({ agentId, items });
  }

  async updateSemanticKnowledge(agentId: string, id: string, input: { type?: string; content?: string; context?: string; metadata?: any }) {
    return await this.sdk.updateSemanticKnowledge({ agentId, id, input });
  }

  async deleteSemanticKnowledge(agentId: string, id: string) {
    return await this.sdk.deleteSemanticKnowledge({ agentId, id });
  }

  // Agent Personality Trait Operations
  async addAgentPersonalityTrait(agentId: string, input: { traitId: string; systemWeight?: number; relativeWeight?: number; confidence?: number; isCoreTrait?: boolean; metadata?: any }) {
    return await this.sdk.createAgentPersonalityTrait({ agentId, input });
  }

  async deleteAgentPersonalityTrait(agentId: string, id: string) {
    return await this.sdk.deleteAgentPersonalityTrait({ agentId, id });
  }

  async listAgentPersonalityTraits(filters: { agentId?: string; dimensionId?: string; aspectId?: string; traitId?: string; isCoreTrait?: boolean }) {
    return await this.sdk.agentPersonalityTraits({ filters });
  }
} 