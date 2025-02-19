import { Sdk } from '../__generated__/index';

export class Developers {
  constructor(private sdk: Sdk) {}

  async create(input: { email: string }) {
    const result = await this.sdk.createDeveloper({ email: input.email });
    return result.data.createDeveloper;
  }

  async byId(id: string) {
    const result = await this.sdk.developer({ id });
    return result.data.developer;
  }

  async getOrCreate(email: string) {
    const result = await this.sdk.getOrCreateDeveloper({ email });
    return result.data.getOrCreateDeveloper;
  }

  async delete(id: string) {
    const result = await this.sdk.deleteDeveloper({ id });
    return result.data.deleteDeveloper;
  }

  async createToken(developerId: string, input: { name: string; metadata?: any }) {
    const result = await this.sdk.createAuthToken({ developerId, input });
    return result.data.createAuthToken;
  }

  async updateToken(id: string, developerId: string, input: { name: string; metadata?: any }) {
    const result = await this.sdk.updateAuthToken({ id, developerId, input });
    return result.data.updateAuthToken;
  }

  async revokeToken(id: string, developerId: string) {
    const result = await this.sdk.deleteAuthToken({ id, developerId });
    return result.data.deleteAuthToken;
  }

  async listTokens(developerId: string) {
    const result = await this.sdk.authTokens({ developerId });
    return result.data.authTokens;
  }

  async getToken(token: string, developerId: string) {
    const result = await this.sdk.authToken({ token, developerId });
    return result.data.authToken;
  }
}