import type { Sdk, GroupStatus, SourceType } from '../__generated__/index';
import { WrappedSdk } from '../types';

export class Groups {
  constructor(private sdk: WrappedSdk<Sdk>) {}

  async create(input: { name?: string; prompt?: string; targetSize?: number; status?: GroupStatus; metadata?: any; agentIds?: string[]; sourceId: string; sourceType: SourceType }) {
    return await this.sdk.createGroup({ input });
  }

  async byId(id: string) {
    return await this.sdk.group({ id });
  }

  async list() {
    return await this.sdk.groups();
  }

  async update(id: string, input: { name?: string; prompt?: string; targetSize?: number; status?: GroupStatus; metadata?: any; sourceId?: string; sourceType?: SourceType }) {
    return await this.sdk.updateGroup({ id, input });
  }

  async delete(id: string) {
    return await this.sdk.deleteGroup({ id });
  }
} 