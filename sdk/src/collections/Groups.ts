import { GroupStatus, Sdk, SourceType } from '../__generated__/index';

export class Groups {
  constructor(private sdk: Sdk) {}

  async create(input: { name?: string; prompt?: string; targetSize?: number; status?: GroupStatus; metadata?: any; agentIds?: string[]; sourceId: string; sourceType: SourceType }) {
    const result = await this.sdk.createGroup({ input });
    return result.data.createGroup;
  }

  async byId(id: string) {
    const result = await this.sdk.group({ id });
    return result.data.group;
  }

  async list() {
    const result = await this.sdk.groups();
    return result.data.groups;
  }

  async update(id: string, input: { name?: string; prompt?: string; targetSize?: number; status?: GroupStatus; metadata?: any; sourceId?: string; sourceType?: SourceType }) {
    const result = await this.sdk.updateGroup({ id, input });
    return result.data.updateGroup;
  }

  async delete(id: string) {
    const result = await this.sdk.deleteGroup({ id });
    return result.data.deleteGroup;
  }
} 