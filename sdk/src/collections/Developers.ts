import type { CreateAuthTokenInput, Sdk, UpdateAuthTokenInput } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Developers {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(input: { email: string }) {
    return await this.sdk.createDeveloper({ email: input.email });
  }

  async byId(id: string) {
    return await this.sdk.developer({ id });
  }

  async byEmail(email: string) {
    return await this.sdk.getOrCreateDeveloper({ email });
  }

  async delete(id: string) {
    return await this.sdk.deleteDeveloper({ id });
  }

  async createToken(developerId: string, input: CreateAuthTokenInput) {
    return await this.sdk.createAuthToken({ developerId, input });
  }

  async updateToken(id: string, developerId: string, input: UpdateAuthTokenInput) {
    return await this.sdk.updateAuthToken({ id, developerId, input });
  }

  async revokeToken(id: string, developerId: string) {
    return await this.sdk.deleteAuthToken({ id, developerId });
  }

  async listTokens(developerId: string) {
    return await this.sdk.authTokens({ developerId });
  }

  async getToken(token: string, developerId: string) {
    return await this.sdk.authToken({ token, developerId });
  }
}