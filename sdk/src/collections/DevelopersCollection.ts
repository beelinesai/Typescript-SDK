import * as generated from '../__generated__/index';

export class DevelopersCollection {
  constructor(private sdk: ReturnType<typeof generated.getSdk>) {}

  async add(input: { email: string }) {
    const result = await this.sdk.createDeveloper({ email: input.email });
    return result.data.createDeveloper;
  }

  async byId(id: string) {
    const result = await this.sdk.developer({ id });
    return result.data.developer;
  }
  
  async createToken(input: { name: string; metadata?: any }) {
    // TODO: Implement when token mutation is available
    throw new Error('Not implemented');
  }

  async listTokens() {
    // TODO: Implement when token query is available
    throw new Error('Not implemented');
  }

  async revokeToken(tokenId: string) {
    // TODO: Implement when token deletion mutation is available
    throw new Error('Not implemented');
  }
}