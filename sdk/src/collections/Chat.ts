import type { ChatSource, Sdk, ThreadConfig, CreateBeelineInput } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Chat {
  public threads;

  async get(source: ChatSource) {
    return await this.sdk.openChat({ source });
  }

  constructor(private sdk: WrappedSdk<Sdk>) {
    this.threads = {
      list: async (source: ChatSource) => {
        return await this.sdk.getThreadsBySource({ source });
      },
      
      new: async (source: ChatSource, config?: ThreadConfig) => {
        return await this.sdk.createThread({ source, config });
      },
      
      message: async (threadId: string, input: CreateBeelineInput) => {
        return await this.sdk.createBeeline({ threadId, input });
      },

      response: async (beelineId: string) => {
        return await this.sdk.getCompletedBeeline({ beelineId });
      }
    };
  }
}