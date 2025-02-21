import { GraphQLClient } from 'graphql-request';
import { Sdk, getSdk } from './__generated__/index';
import { WrappedSdk } from './types';

// Collections
import { Developers } from './collections/Developers';
import { Agents } from './collections/Agents';
import { Groups } from './collections/Groups';
import { Personality } from './collections/Personality';
import { Dimensions } from './collections/Dimensions';
import { Audiences } from './collections/Audiences';
import { Aspects } from './collections/Aspects';

export class Beelines {
  private client: GraphQLClient;
  private sdk: WrappedSdk<Sdk>;
  public readonly developers: Developers;
  public readonly agents: Agents;
  public readonly groups: Groups;
  public readonly personality: Personality;
  public readonly dimensions: Dimensions;
  public readonly audiences: Audiences;
  public readonly aspects: Aspects;

  constructor(config: { endpoint: string, apiKey: string }) {
    this.client = new GraphQLClient(config.endpoint);
    this.client.setHeader('Authorization', `Bearer ${config.apiKey}`);
    const sdk = getSdk(this.client);
    // Wrap all sdk functions to have unified error handling
    this.sdk = this.wrapSdkFunctions(sdk);

    this.developers = new Developers(this.sdk);
    this.agents = new Agents(this.sdk);
    this.groups = new Groups(this.sdk);
    this.personality = new Personality(this.sdk);
    this.dimensions = new Dimensions(this.sdk);
    this.audiences = new Audiences(this.sdk);
    this.aspects = new Aspects(this.sdk);
  }

  // This method wraps each function in the sdk and ensures it returns result data directly, or throws
  // { result: T, errors: Error[], success: boolean }
  private wrapSdkFunctions(sdk: Sdk): WrappedSdk<Sdk> {
    const wrapped: any = {};
    for (const k in sdk) {
      const key = k as keyof Sdk; // fixes the type issue of 'key in obj'
      
      if (typeof sdk[key] === 'function') {
        const originalFn = sdk[key];
        wrapped[key] = async (...args: any[]) => {

          try {
            // @ts-ignore
            const res = await originalFn(...args);
            if (res && typeof res === 'object' && 'data' in res) {
              const d = res.data;
              return (d && typeof d === 'object' && Object.keys(d).length === 1) ? Object.values(d)[0] : d;
            }
            // Handle errors from successful response (not sure we will ever have this)
            // const errors = res?.errors ?? [];
            // return { result: data, errors, success: errors.length === 0 };
            return res;

          } catch (e: any) {

            // Handle GraphQL response errors
            if (e.response && Array.isArray(e.response.errors)) {
              throw e.response.errors
              // return { result: null, errors: e.response.errors, success: false };
            }
            // Handle any other errors
            throw e;
            // return { result: null, errors: [e], success: false };
          }
        };
      } else {
        wrapped[key] = sdk[key];
      }
    }
    return wrapped as WrappedSdk<Sdk>;
  }
}