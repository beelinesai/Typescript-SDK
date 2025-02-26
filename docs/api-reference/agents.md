# Agents

The Agents collection provides methods for creating, retrieving, updating, and deleting agents in the Beelines platform. Agents are AI personalities that can be used in various contexts such as chat, audience interactions, and more.

## Methods

### Create an Agent

Creates a new agent for a developer.

```typescript
async create(developerId: string, input: CreateAgentInput): Promise<Agent>
```

**Parameters:**
```typescript
{
  developerId: string;          // The ID of the developer who owns this agent
  input: CreateAgentInput;      // Configuration for the new agent
}

// CreateAgentInput
{
  name?: string;                // The name of the agent (optional)
  characterData?: {             // Character information for the agent (optional)
    bio: string;                // Biography of the agent
    lore?: string;              // Background lore for the agent (optional)
    adjectives?: string[];      // Descriptive terms for the agent's personality (optional)
  };
  audienceId?: string;          // ID of an audience to associate with this agent (optional)
}
```

**Returns:**
```typescript
Agent {
  id: string;                   // Unique identifier for the agent
  developerId: string;          // ID of the developer who owns this agent
  name: string;                 // The agent's name
  characterData: CharacterData; // Character information
  config: AgentConfig;          // Configuration settings
  createdAt: string;            // Creation timestamp
  updatedAt: string;            // Last update timestamp
  audienceMembershipCount: number; // Number of audiences the agent belongs to
  panelMembershipCount: number; // Number of panels the agent belongs to
  groupMembershipCount: number; // Number of groups the agent belongs to
  rewardsGiven: Reward[];       // Rewards given to the agent
}
```

### Get Agent by ID

Retrieves a specific agent by its ID.

```typescript
async byId(id: string, developerId: string): Promise<Agent>
```

**Parameters:**
```typescript
{
  id: string;          // The ID of the agent to retrieve
  developerId: string; // The ID of the developer who owns the agent
}
```

**Returns:**
```typescript
Agent {
  // Same structure as create method
}
```

### List Agents

Retrieves all agents owned by a developer.

```typescript
async list(developerId: string): Promise<Agent[]>
```

**Parameters:**
```typescript
{
  developerId: string; // The ID of the developer whose agents to list
}
```

**Returns:**
```typescript
Agent[] // Array of agent objects owned by the developer
```

### Update an Agent

Updates an existing agent's properties.

```typescript
async update(id: string, developerId: string, input: UpdateAgentInput): Promise<boolean>
```

**Parameters:**
```typescript
{
  id: string;               // The ID of the agent to update
  developerId: string;      // The ID of the developer who owns the agent
  input: UpdateAgentInput;  // Properties to update
}

// UpdateAgentInput
{
  name?: string;            // New name for the agent (optional)
}
```

**Returns:**
```typescript
boolean // true if update was successful, false otherwise
```

### Delete an Agent

Deletes an agent from the system.

```typescript
async delete(id: string, developerId: string): Promise<boolean>
```

**Parameters:**
```typescript
{
  id: string;          // The ID of the agent to delete
  developerId: string; // The ID of the developer who owns the agent
}
```

**Returns:**
```typescript
boolean // true if deletion was successful, false otherwise
```

### Generate Agents

Generates one or more AI agents automatically.

```typescript
async generate(developerId: string, input: GenerateAgentsInput): Promise<Agent[]>
```

**Parameters:**
```typescript
{
  developerId: string;           // The ID of the developer who will own the generated agents
  input: GenerateAgentsInput;    // Configuration for agent generation
}

// GenerateAgentsInput
{
  quantity?: number;             // Number of agents to generate (optional, default: 1)
}
```

**Returns:**
```typescript
Agent[] // Array of generated agent objects
```

### Import from Eliza

Imports an agent from an Eliza character definition.

```typescript
async importEliza(developerId: string, input: Character): Promise<Agent>
```

**Parameters:**
```typescript
{
  developerId: string;  // The ID of the developer who will own the imported agent
  input: Character;     // Eliza character definition to import, which includes:
                        // - name (string): Name of the character
                        // - bio (string[]): Biography information
                        // - lore (string[]): Background lore
                        // - adjectives (string[]): Descriptive terms for personality
                        // - And other Eliza-specific fields (plugins, style, knowledge, etc.)
}
```

**Returns:**
```typescript
Agent {
  // Same structure as create method
}
```

## Types

### Agent

The representation of an AI agent in the Beelines platform.

```typescript
type Agent = {
  id: string;
  developerId: string;
  name: string;
  characterData?: {
    id: string;
    agentId: string;
    bio: string;
    lore?: string;
    adjectives: string[];
    createdAt: string;
    updatedAt: string;
  };
  config?: {
    id: string;
    agentId: string;
    apis: any;
    preferences: any;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  audienceMembershipCount?: number;
  panelMembershipCount?: number;
  groupMembershipCount?: number;
  rewardsGiven?: Array<{
    id: string;
    amount: number;
    txHash?: string;
    createdAt: string;
    updatedAt: string;
  }>;
};
```

### CreateAgentInput

Input for creating a new agent.

```typescript
type CreateAgentInput = {
  name?: string;
  characterData?: {
    bio: string;
    lore?: string;
    adjectives?: string[];
  };
  audienceId?: string;
};
```

### UpdateAgentInput

Input for updating an existing agent.

```typescript
type UpdateAgentInput = {
  name?: string;
};
```

### GenerateAgentsInput

Input for automatically generating agents.

```typescript
type GenerateAgentsInput = {
  quantity?: number; // Default: 1
};
```

## Examples

### Creating a new agent

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

// First, get the developer ID
const developer = await beelines.developers.getByEmail("user@example.com");

// Create a new agent
const agent = await beelines.agents.create(developer.id, {
  name: "Support Agent",
  characterData: {
    bio: "A helpful customer support agent specializing in technical assistance.",
    adjectives: ["Helpful", "Technical", "Patient"]
  }
});

console.log(`Created agent: ${agent.id} - ${agent.name}`);
```

### Listing all agents

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const developer = await beelines.developers.getByEmail("user@example.com");
const agents = await beelines.agents.list(developer.id);

console.log(`Found ${agents.length} agents:`);
agents.forEach(agent => {
  console.log(`- ${agent.name} (${agent.id})`);
});
```

### Generating agents automatically

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const developer = await beelines.developers.getByEmail("user@example.com");
const generatedAgents = await beelines.agents.generate(developer.id, {
  quantity: 3
});

console.log(`Generated ${generatedAgents.length} agents:`);
generatedAgents.forEach(agent => {
  console.log(`- ${agent.name} (${agent.id})`);
});
```
