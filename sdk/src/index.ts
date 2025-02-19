import { GraphQLClient } from 'graphql-request';
import { Sdk, getSdk } from './__generated__/index';

// Collections
import { Developers } from './collections/Developers';
import { Agents } from './collections/Agents';
import { Groups } from './collections/Groups';
import { Personality } from './collections/Personality';
import { Dimensions } from './collections/Dimensions';
import { Audiences } from './collections/Audiences';
import { Aspects } from './collections/Aspects';


// import { SdkFunctionWrapper } from './__generated__/index';
// const wrapper: SdkFunctionWrapper = async <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, _operationName: string, _operationType?: string, _variables?: any) => {
//   const res = await action();
//   console.log('in wrapper:', res);
//   // @ts-ignore
//   if (res.errors) {
//     // throw new Error(res.errors[0].message);
//     // throw or retry
//   }
//   // @ts-ignore
//   if (res.data) {
//     // @ts-ignore
//     if (Object.keys(res.data).length === 1) {
//       // @ts-ignore
//       res.data = res.data[Object.keys(res.data)[0]];
//     }
//     // @ts-ignore
//     return res.data as T
//   }
//   return res
// };

// async function postProcess<T>(res: any) {
//   if (res.errors) {
//     // throw new Error(res.errors[0].message);
//     // throw or retry
//   }
//   // @ts-ignore
//   if (res.data) {
//     // @ts-ignore
//     if (Object.keys(res.data).length === 1) {
//       // @ts-ignore
//       res.data = res.data[Object.keys(res.data)[0]];
//     }
//     // @ts-ignore
//     return res.data as T
//   }
//   return res.data
// }

export class Beelines {
  private client: GraphQLClient;
  public sdk: Sdk;
  public readonly developers: Developers;
  public readonly agents: Agents;
  public readonly groups: Groups;
  public readonly personality: Personality;
  public readonly dimensions: Dimensions;
  public readonly audiences: Audiences;
  public readonly aspects: Aspects;

  constructor(config: { endpoint: string, apiKey: string }) {
    this.client = new GraphQLClient(config.endpoint);
    this.sdk = getSdk(this.client);
    this.client.setHeader('Authorization', `Bearer ${config.apiKey}`);
    this.developers = new Developers(this.sdk);
    this.agents = new Agents(this.sdk);
    this.groups = new Groups(this.sdk);
    this.personality = new Personality(this.sdk);
    this.dimensions = new Dimensions(this.sdk);
    this.audiences = new Audiences(this.sdk);
    this.aspects = new Aspects(this.sdk);

    for (const key in this.sdk) {
      // @ts-ignore
      if (typeof this.sdk[key] === 'function') {
        // @ts-ignore
        this[key] = postProcess(this.sdk[key]);
      }
    }
  }
}