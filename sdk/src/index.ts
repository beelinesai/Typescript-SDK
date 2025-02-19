import { GraphQLClient } from 'graphql-request';
import * as generated from './__generated__/index';

// Collections
import { DevelopersCollection } from './collections/DevelopersCollection';
import { SdkFunctionWrapper } from './__generated__/index';

const wrapper: SdkFunctionWrapper = async (action, _operationName, _operationType, _variables) => {
  const res = await action();
  console.log('in wrapper:', res);
  // @ts-ignore
  if (res.errors) {
    // throw new Error(res.errors[0].message);
    // throw or retry
  }
  // @ts-ignore
  if (res.data) {
    // @ts-ignore
    if (Object.keys(res.data).length === 1) {
      // @ts-ignore
      res.data = res.data[Object.keys(res.data)[0]];
    }
    // @ts-ignore
    return res.data // as T // ?
  }
  return res
};

export class Beelines {
  private client: GraphQLClient;
  public sdk: ReturnType<typeof generated.getSdk>; // for now
  public readonly developers: DevelopersCollection;

  constructor(config: { endpoint: string, apiKey: string }) {
    this.client = new GraphQLClient(config.endpoint);
    this.sdk = generated.getSdk(this.client, wrapper);
    this.client.setHeader('Authorization', `Bearer ${config.apiKey}`);
    this.developers = new DevelopersCollection(this.sdk);
  }
}