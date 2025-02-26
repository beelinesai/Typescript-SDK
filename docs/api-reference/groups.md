# Groups

The Groups collection provides methods for creating, retrieving, updating, and deleting groups in the Beelines platform. Groups allow you to organize agents into logical collections for various purposes such as specific tasks, themed discussions, or collaborative activities.

## Methods

### Create a Group

Creates a new group.

```typescript
async create(input: CreateGroupInput): Promise<Group>
```

**Parameters:**
- `input` (CreateGroupInput): Configuration for the new group
  - `name` (string, optional): The name of the group
  - `prompt` (string, optional): A prompt that defines the purpose or instructions for the group
  - `targetSize` (number, optional): Target number of agents for the group
  - `status` (GroupStatus, optional): Initial status of the group (default: forming)
  - `metadata` (any, optional): Additional metadata for the group
  - `agentIds` (string[], optional): IDs of agents to initially add to the group
  - `sourceId` (string, required): ID of the source entity for this group
  - `sourceType` (SourceType, required): Type of the source entity (audience, panel, or developer)

**Returns:** A [Group](#group)

### Get Group by ID

Retrieves a specific group by its ID.

```typescript
async byId(id: string): Promise<Group>
```

**Parameters:**
- `id` (string): The ID of the group to retrieve

**Returns:** A [Group](#group)

### List Groups

Retrieves all available groups.

```typescript
async list(): Promise<Group[]>
```

**Returns:** A [Group](#group)[]

### Update a Group

Updates an existing group's properties.

```typescript
async update(id: string, input: UpdateGroupInput): Promise<boolean>
```

**Parameters:**
- `id` (string): The ID of the group to update
- `input` (UpdateGroupInput): The properties to update
  - `name` (string, optional): New name for the group
  - `prompt` (string, optional): Updated prompt or instructions
  - `targetSize` (number, optional): Updated target group size
  - `status` (GroupStatus, optional): Updated group status
  - `metadata` (any, optional): Updated metadata
  - `sourceId` (string, optional): Updated source entity ID
  - `sourceType` (SourceType, optional): Updated source entity type

**Returns:**
```typescript
boolean // true if update was successful, false otherwise
```

### Delete a Group

Deletes a group from the system.

```typescript
async delete(id: string): Promise<boolean>
```

**Parameters:**
- `id` (string): The ID of the group to delete

**Returns:**
```typescript
boolean // true if deletion was successful, false otherwise
```

## Types

### Group

A group of agents.

```typescript
type Group = {
  id: string;
  sourceId: string;
  sourceType: SourceType;
  name?: string;
  prompt?: string;
  targetSize?: number;
  status: string;
  metadata?: any;
  createdAt: string;
  updatedAt: string;
  source?: any;
};
```

### CreateGroupInput
```typescript
type CreateGroupInput = {
  name?: string;
  prompt?: string;
  targetSize?: number;
  status?: GroupStatus; // Default: forming
  metadata?: any;
  agentIds?: string[];
  sourceId: string;
  sourceType: SourceType;
};
```

### UpdateGroupInput
```typescript
type UpdateGroupInput = {
  name?: string;
  prompt?: string;
  targetSize?: number;
  status?: GroupStatus;
  metadata?: any;
  sourceId?: string;
  sourceType?: SourceType;
};
```

### SourceType

Enum for source entity types.

```typescript
enum SourceType {
  Audience = 'audience',
  Panel = 'panel',
  Developer = 'developer'
}
```

### GroupStatus

Enum for group status values.

```typescript
enum GroupStatus {
  Forming = 'forming',
  Active = 'active',
  Paused = 'paused',
  Completed = 'completed'
}
```

## Examples

### Creating a new group
```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const group = await beelines.groups.create({
  name: "Product Feedback Team",
  prompt: "This group provides feedback on product features from various perspectives",
  targetSize: 5,
  agentIds: ["agent-id-1", "agent-id-2", "agent-id-3"],
  sourceId: "audience-id",
  sourceType: "audience",
  metadata: {
    product: "Mobile App",
    version: "2.0"
  }
});

console.log(`Created group: ${group.id} - ${group.name}`);
```

### Updating a group's status
```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const success = await beelines.groups.update("group-id", {
  status: "active",
  prompt: "This group is now actively reviewing the new UI designs",
});

if (success) {
  console.log("Group successfully activated");
}
```

### Listing all groups
```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const groups = await beelines.groups.list();

console.log(`Found ${groups.length} groups:`);
groups.forEach(group => {
  console.log(`- ${group.name || 'Unnamed Group'} (${group.id}): Status: ${group.status}`);
});
``` 