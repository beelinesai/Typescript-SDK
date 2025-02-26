# Chat

The Chat collection provides methods for managing conversations with agents and groups in the Beelines platform. It includes functionality for opening chats, creating and managing threads, and handling message exchanges.

## Methods

### Get Chat

Opens a chat with a specified source (agent or group).

```typescript
async get(source: ChatSource): Promise<Chat>
```

**Parameters:**
- `source` (ChatSource): The source to open a chat with
  - `sourceId` (string): ID of the agent or group
  - `sourceType` (ChatSourceType): Type of the source ('agent' or 'group')

**Returns:**
- `Chat`: An object containing the latest thread and available threads

## Thread Methods

The Chat collection includes a nested `threads` object with the following methods:

### List Threads

Lists all threads for a specified source.

```typescript
async threads.list(source: ChatSource): Promise<LatestThread[]>
```

**Parameters:**
- `source` (ChatSource): The source to get threads for
  - `sourceId` (string): ID of the agent or group
  - `sourceType` (ChatSourceType): Type of the source ('agent' or 'group')

**Returns:**
- `LatestThread[]`: Array of thread objects

### Create Thread

Creates a new thread for a specified source.

```typescript
async threads.new(source: ChatSource, config?: ThreadConfig): Promise<string>
```

**Parameters:**
- `source` (ChatSource): The source to create a thread for
  - `sourceId` (string): ID of the agent or group
  - `sourceType` (ChatSourceType): Type of the source ('agent' or 'group')
- `config` (ThreadConfig, optional): Configuration for the new thread
  - `name` (string, optional): Name of the thread
  - `metadata` (ThreadMetadataInput, optional): Additional metadata for the thread

**Returns:**
- `string`: ID of the newly created thread

### Send Message

Sends a message to a thread, creating a new beeline.

```typescript
async threads.message(threadId: string, input: CreateBeelineInput): Promise<string>
```

**Parameters:**
- `threadId` (string): ID of the thread to send a message to
- `input` (CreateBeelineInput): The message to send
  - `content` (string, required): Content of the message
  - `senderType` (SenderType, required): Type of sender ('user', 'agent', 'system')
  - `senderId` (string, optional): ID of the sender
  - `role` (Role, optional): Role of the message ('user', 'assistant', 'system')
  - `inResponseToId` (string, optional): ID of the message this is responding to
  - `responseType` (string, optional): Type of response
  - `interactionId` (string, optional): ID of the interaction
  - `metadata` (any, optional): Additional metadata for the message
  - `summarizationPrompt` (string, optional): Prompt for summarizing responses
  - `model` (AvailableModels, optional): AI model to use for responses

**Returns:**
- `string`: ID of the created beeline

### Get Response

Retrieves a completed beeline response.

```typescript
async threads.response(beelineId: string): Promise<CompletedBeeline>
```

**Parameters:**
- `beelineId` (string): ID of the beeline to get a response for

**Returns:**
- `CompletedBeeline`: Object containing the status, responses, and summary

## Types

### Chat

Represents a chat instance with a source.

```typescript
type Chat = {
  latestThread: LatestThread;
  threads: Array<ThreadLite>;
};
```

### ChatSource

Specifies a source for a chat.

```typescript
type ChatSource = {
  sourceId: string;
  sourceType: ChatSourceType;
};
```

### ChatSourceType

Enum for types of chat sources.

```typescript
enum ChatSourceType {
  Group = 'group',
  Agent = 'agent'
}
```

### ThreadConfig

Configuration for creating a new thread.

```typescript
type ThreadConfig = {
  name?: string;
  metadata?: ThreadMetadataInput;
};
```

### ThreadMetadataInput

Metadata for thread configuration.

```typescript
type ThreadMetadataInput = {
  title?: string;
  description?: string;
  tags?: string[];
  customData?: any;
};
```

### LatestThread

Detailed representation of a thread with messages.

```typescript
type LatestThread = {
  id: string;
  name: string;
  status: ThreadStatus;
  sourceType: ChatSourceType;
  sourceId: string;
  metadata?: ThreadMetadata;
  createdAt: string;
  updatedAt: string;
  organizationId: string;
  source?: ThreadSource;
  beelines?: Beeline[];
  settings?: ThreadSetting;
  stats?: ThreadStats;
  pendingBeeline?: boolean;
  pendingBeelineId?: string;
  messages: ThreadMessage[];
};
```

### ThreadLite

Simplified representation of a thread.

```typescript
type ThreadLite = {
  id: string;
  name: string;
  status: ThreadStatus;
  createdAt: string;
  updatedAt: string;
};
```

### ThreadStatus

Enum for thread status values.

```typescript
enum ThreadStatus {
  Active = 'active',
  Paused = 'paused',
  Completed = 'completed',
  Archived = 'archived'
}
```

### CreateBeelineInput

Input for creating a new beeline (message).

```typescript
type CreateBeelineInput = {
  content: string;
  senderType: SenderType;
  senderId?: string;
  role?: Role;
  inResponseToId?: string;
  responseType?: string;
  interactionId?: string;
  metadata?: any;
  summarizationPrompt?: string;
  model?: AvailableModels;
};
```

### SenderType

Enum for types of message senders.

```typescript
enum SenderType {
  User = 'user',
  Agent = 'agent',
  System = 'system'
}
```

### Role

Enum for message roles.

```typescript
enum Role {
  User = 'user',
  Assistant = 'assistant',
  System = 'system'
}
```

### CompletedBeeline

Represents a completed beeline with responses.

```typescript
type CompletedBeeline = {
  status: BeelineStatus;
  responses?: BeelineResponse[];
  summary?: string;
};
```

### BeelineResponse

Represents a response from an agent within a beeline.

```typescript
type BeelineResponse = {
  agentId: string;
  agentName: string;
  response: any;
};
```

### BeelineStatus

Enum for beeline status values.

```typescript
enum BeelineStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Error = 'error'
}
```

## Examples

### Opening a chat with an agent

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const chat = await beelines.chat.get({
  sourceId: "agent-id",
  sourceType: "agent"
});

console.log(`Opened chat with latest thread: ${chat.latestThread.id}`);
```

### Creating a new thread and sending a message

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

// Create a new thread
const threadId = await beelines.chat.threads.new(
  {
    sourceId: "group-id",
    sourceType: "group"
  },
  {
    name: "Product Discussion",
    metadata: {
      title: "New Feature Brainstorm",
      tags: ["product", "features", "brainstorm"]
    }
  }
);

// Send a message to the thread
const beelineId = await beelines.chat.threads.message(threadId, {
  content: "What features should we prioritize for the next release?",
  senderType: "user",
  role: "user"
});

// Wait for and retrieve the response
const response = await beelines.chat.threads.response(beelineId);

console.log("Agent responses:");
response.responses?.forEach(r => {
  console.log(`${r.agentName}: ${r.response}`);
});
```

### Listing threads for a group

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const source = {
  sourceId: "group-id",
  sourceType: "group"
};

const threads = await beelines.chat.threads.list(source);

console.log(`Found ${threads.length} threads:`);
threads.forEach(thread => {
  console.log(`- ${thread.name} (${thread.id}) - Status: ${thread.status}`);
  console.log(`  Last updated: ${new Date(thread.updatedAt).toLocaleString()}`);
});
``` 