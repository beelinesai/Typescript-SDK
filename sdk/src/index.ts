import { GraphQLClient } from 'graphql-request';
import * as generated from './__generated__/index';

// Collections
import { DevelopersCollection } from './collections/DevelopersCollection';

export class Beelines {
  private client: GraphQLClient;
  private sdk: ReturnType<typeof generated.getSdk>;
  public readonly developers: DevelopersCollection;

  constructor(config: { endpoint: string, apiKey: string }) {
    this.client = new GraphQLClient(config.endpoint);
    this.sdk = generated.getSdk(this.client);
    this.client.setHeader('Authorization', `Bearer ${config.apiKey}`);
    this.developers = new DevelopersCollection(this.sdk);
  }
}