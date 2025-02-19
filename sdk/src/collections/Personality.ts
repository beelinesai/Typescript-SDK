import { Sdk } from '../__generated__/index';

export class Personality {
  constructor(private sdk: Sdk) {}

  // Trait Operations
  async create(input: { aspectId: string; name: string; description: string; metadata?: any; isPublic?: boolean }) {
    const result = await this.sdk.createTrait({ input });
    return result.data.createTrait;
  }

  async byTraitId(id: string) {
    const result = await this.sdk.trait({ id });
    return result.data.trait;
  }

  async listTraits() {
    const result = await this.sdk.traits();
    return result.data.traits;
  }

  async updateTrait(id: string, input: { name?: string; description?: string; metadata?: any }) {
    const result = await this.sdk.updateTrait({ id, input });
    return result.data.updateTrait;
  }

  async deleteTrait(id: string) {
    const result = await this.sdk.deleteTrait({ id });
    return result.data.deleteTrait;
  }

  // Semantic Knowledge Operations
  async addSemanticKnowledge(agentId: string, items: { type: string; content: string; context?: string; metadata?: any }[]) {
    const result = await this.sdk.addSemanticKnowledge({ agentId, items });
    return result.data.addSemanticKnowledge;
  }

  async updateSemanticKnowledge(agentId: string, id: string, input: { type?: string; content?: string; context?: string; metadata?: any }) {
    const result = await this.sdk.updateSemanticKnowledge({ agentId, id, input });
    return result.data.updateSemanticKnowledge;
  }

  async deleteSemanticKnowledge(agentId: string, id: string) {
    const result = await this.sdk.deleteSemanticKnowledge({ agentId, id });
    return result.data.deleteSemanticKnowledge;
  }

  // Agent Personality Trait Operations
  async addAgentPersonalityTrait(agentId: string, input: { traitId: string; systemWeight?: number; relativeWeight?: number; confidence?: number; isCoreTrait?: boolean; metadata?: any }) {
    const result = await this.sdk.createAgentPersonalityTrait({ agentId, input });
    return result.data.createAgentPersonalityTrait;
  }

  async deleteAgentPersonalityTrait(agentId: string, id: string) {
    const result = await this.sdk.deleteAgentPersonalityTrait({ agentId, id });
    return result.data.deleteAgentPersonalityTrait;
  }

  async listAgentPersonalityTraits(filters: { agentId?: string; dimensionId?: string; aspectId?: string; traitId?: string; isCoreTrait?: boolean }) {
    const result = await this.sdk.agentPersonalityTraits({ filters });
    return result.data.agentPersonalityTraits;
  }
} 