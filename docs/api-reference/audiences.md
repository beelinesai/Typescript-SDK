# Audiences

The Audiences collection provides methods for creating, retrieving, updating, and managing audiences in the Beelines platform. Audiences represent groups of agents that can be used for various purposes such as testing, feedback, or interactions.

## Methods

### Create an Audience

Creates a new audience.

```typescript
async create(input: CreateAudienceInput): Promise<Audience>
```

**Parameters:**
- `input` (CreateAudienceInput): Configuration for the new audience
  - `name` (string): The name of the audience (required)
  - `description` (string, optional): A description of the audience's purpose
  - `apiKeyId` (string, optional): API key identifier for the audience
  - `pricingModel` (any, optional): Pricing model configuration
  - `metadata` (any, optional): Additional metadata for the audience

**Returns:**
- `Audience`: The newly created audience object

### Get Available Audiences

Retrieves audiences that are available for use.

```typescript
async available(): Promise<Audience[]>
```

**Parameters:**
- None

**Returns:**
- `Audience[]`: Array of available audience objects

### Get Audience by ID

Retrieves a specific audience by its ID.

```typescript
async byId(id: string): Promise<Audience>
```

**Parameters:**
- `id` (string): The ID of the audience to retrieve

**Returns:**
- `Audience`: The requested audience object

### List Audiences

Retrieves all audiences.

```typescript
async list(): Promise<Audience[]>
```

**Parameters:**
- None

**Returns:**
- `Audience[]`: Array of audience objects

### Update an Audience

Updates an existing audience's properties.

```typescript
async update(id: string, input: UpdateAudienceInput): Promise<boolean>
```

**Parameters:**
- `id` (string): The ID of the audience to update
- `input` (UpdateAudienceInput): The properties to update
  - `name` (string, optional): New name for the audience
  - `description` (string, optional): Updated description
  - `pricingModel` (any, optional): Updated pricing model
  - `metadata` (any, optional): Updated metadata

**Returns:**
- Boolean indicating success of the update operation

### Delete an Audience

Deletes an audience from the system.

```typescript
async delete(id: string): Promise<boolean>
```

**Parameters:**
- `id` (string): The ID of the audience to delete

**Returns:**
- Boolean indicating success of the deletion operation

### Add to Audience

Adds agents to an existing audience based on specified criteria.

```typescript
async addTo(id: string, input: AddToAudienceInput): Promise<Audience>
```

**Parameters:**
- `id` (string): The ID of the audience to add agents to
- `input` (AddToAudienceInput): Configuration for adding agents
  - `prompt` (string, optional): Prompt to guide agent selection
  - `size` (number, optional): Number of agents to add

**Returns:**
- `Audience`: The updated audience object

### Generate Audience

Generates a new audience with automatically created agents.

```typescript
async generate(input: GenerateAudienceInput): Promise<Audience>
```

**Parameters:**
- `input` (GenerateAudienceInput): Configuration for the generated audience
  - `name` (string): The name of the audience (required)
  - `description` (string, optional): A description of the audience
  - `apiKeyId` (string, optional): API key identifier
  - `pricingModel` (any, optional): Pricing model configuration
  - `metadata` (any, optional): Additional metadata
  - `prompt` (string, optional): Prompt to guide agent generation
  - `size` (number, optional): Number of agents to generate

**Returns:**
- `Audience`: The newly generated audience object with its agents

## Types

### Audience

The representation of an audience in the Beelines platform.

```typescript
type Audience = {
  id: string;
  name: string;
  description?: string;
  apiKeyId?: string;
  pricingModel?: any;
  metadata?: any;
  memberCount?: number;
  createdAt: string;
  updatedAt: string;
};
```

### CreateAudienceInput

Input for creating a new audience.

```typescript
type CreateAudienceInput = {
  name: string;
  description?: string;
  apiKeyId?: string;
  pricingModel?: any;
  metadata?: any;
};
```

### UpdateAudienceInput

Input for updating an existing audience.

```typescript
type UpdateAudienceInput = {
  name?: string;
  description?: string;
  pricingModel?: any;
  metadata?: any;
};
```

### AddToAudienceInput

Input for adding agents to an audience.

```typescript
type AddToAudienceInput = {
  prompt?: string;
  size?: number;
};
```

### GenerateAudienceInput

Input for generating an audience with agents.

```typescript
type GenerateAudienceInput = {
  name: string;
  description?: string;
  apiKeyId?: string;
  pricingModel?: any;
  metadata?: any;
  prompt?: string;
  size?: number;
};
```

## Examples

### Creating a new audience

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const audience = await beelines.audiences.create({
  name: "Product Testers",
  description: "A group of AI agents that test our product and provide feedback",
  metadata: {
    purpose: "product testing",
    department: "QA"
  }
});

console.log(`Created audience: ${audience.id} - ${audience.name}`);
```

### Adding agents to an existing audience

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const updatedAudience = await beelines.audiences.addTo("audience-id", {
  prompt: "Select agents that have software testing experience",
  size: 10
});

console.log(`Added agents to audience: ${updatedAudience.name}`);
console.log(`Total members: ${updatedAudience.memberCount}`);
```

### Generating an audience with agents

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const generatedAudience = await beelines.audiences.generate({
  name: "Marketing Focus Group",
  description: "AI agents with marketing expertise for campaign feedback",
  prompt: "Generate agents with diverse marketing backgrounds",
  size: 15
});

console.log(`Generated audience: ${generatedAudience.name}`);
console.log(`Members: ${generatedAudience.memberCount}`);
```

### Listing all audiences

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const audiences = await beelines.audiences.list();

console.log(`Found ${audiences.length} audiences:`);
audiences.forEach(audience => {
  console.log(`- ${audience.name} (${audience.id}): ${audience.memberCount} members`);
});
``` 