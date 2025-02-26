# Developers

The Developers collection provides methods for managing developer accounts and authentication tokens in the Beelines platform. These methods allow you to retrieve developer information and manage API tokens for authentication.

## Methods

### Get Developer by ID

Retrieves a developer by their unique ID.

```typescript
async byId(id: string): Promise<Developer>
```

**Parameters:**
```typescript
{
  id: string;  // The unique identifier of the developer to retrieve
}
```

**Returns:**
```typescript
Developer {
  id: string;           // Unique identifier for the developer
  email: string;        // Email address of the developer
  organizationId?: string;  // ID of the organization the developer belongs to (optional)
  createdAt: string;    // Creation timestamp
  updatedAt: string;    // Last update timestamp
  authTokens?: AuthToken[]; // Array of authentication tokens (optional)
}
```

### Get Developer by Email

Retrieves a developer by their email address. If the developer doesn't exist, it returns null.

```typescript
async byEmail(email: string): Promise<Developer>
```

**Parameters:**
```typescript
{
  email: string;  // The email address of the developer to retrieve
}
```

**Returns:**
```typescript
Developer {
  // Same structure as byId method
}
```

### Delete Developer

Deletes a developer account.

```typescript
async delete(id: string): Promise<boolean>
```

**Parameters:**
```typescript
{
  id: string;  // The ID of the developer to delete
}
```

**Returns:**
```typescript
boolean // true if deletion was successful, false otherwise
```

## Auth Token Management

### Create Auth Token

Creates a new authentication token for a developer.

```typescript
async createToken(developerId: string, input: CreateAuthTokenInput): Promise<AuthToken>
```

**Parameters:**
```typescript
{
  developerId: string;           // The ID of the developer for whom to create the token
  input: CreateAuthTokenInput;   // Configuration for the new token
}

// CreateAuthTokenInput
{
  name?: string;      // A friendly name for the token (optional)
  metadata?: any;     // Additional metadata to associate with the token (optional)
}
```

**Returns:**
```typescript
AuthToken {
  id: string;          // Unique identifier for the token
  developerId: string; // ID of the developer who owns the token
  token: string;       // The actual token string used for authentication
  name?: string;       // Friendly name for the token (optional)
  metadata?: any;      // Additional metadata (optional)
  expiresAt?: string;  // Expiration timestamp (optional)
  createdAt: string;   // Creation timestamp
  updatedAt: string;   // Last update timestamp
}
```

### Update Auth Token

Updates an existing authentication token.

```typescript
async updateToken(id: string, developerId: string, input: UpdateAuthTokenInput): Promise<AuthToken>
```

**Parameters:**
```typescript
{
  id: string;                   // The ID of the token to update
  developerId: string;          // The ID of the developer who owns the token
  input: UpdateAuthTokenInput;  // The updated token properties
}

// UpdateAuthTokenInput
{
  name?: string;      // New friendly name for the token (optional)
  metadata?: any;     // Updated metadata for the token (optional)
}
```

**Returns:**
```typescript
AuthToken {
  // Same structure as createToken method
}
```

### Revoke Auth Token

Revokes an authentication token, making it unusable.

```typescript
async revokeToken(id: string, developerId: string): Promise<boolean>
```

**Parameters:**
```typescript
{
  id: string;           // The ID of the token to revoke
  developerId: string;  // The ID of the developer who owns the token
}
```

**Returns:**
```typescript
boolean // true if revocation was successful, false otherwise
```

### List Auth Tokens

Lists all authentication tokens for a developer.

```typescript
async listTokens(developerId: string): Promise<AuthToken[]>
```

**Parameters:**
```typescript
{
  developerId: string;  // The ID of the developer whose tokens to list
}
```

**Returns:**
```typescript
AuthToken[] // Array of authentication tokens
```

### Get Auth Token

Retrieves a specific authentication token.

```typescript
async getToken(token: string, developerId: string): Promise<AuthToken>
```

**Parameters:**
```typescript
{
  token: string;        // The token string to retrieve
  developerId: string;  // The ID of the developer who owns the token
}
```

**Returns:**
```typescript
AuthToken {
  // Same structure as createToken method
}
```

## Types

### Developer

The representation of a developer account in the Beelines platform.

```typescript
type Developer = {
  id: string;
  email: string;
  organizationId?: string;
  createdAt: string;
  updatedAt: string;
  authTokens?: AuthToken[];
  agents?: Agent[];
};
```

### AuthToken

Represents an authentication token used to access the Beelines API.

```typescript
type AuthToken = {
  id: string;
  developerId: string;
  token: string;
  name?: string;
  metadata?: any;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
};
```

### CreateAuthTokenInput

Input for creating a new authentication token.

```typescript
type CreateAuthTokenInput = {
  name?: string;
  metadata?: any;
};
```

### UpdateAuthTokenInput

Input for updating an existing authentication token.

```typescript
type UpdateAuthTokenInput = {
  name?: string;
  metadata?: any;
};
```

## Examples

### Getting a developer by email

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const developer = await beelines.developers.byEmail("user@example.com");
console.log(`Developer: ${developer.id} (${developer.email})`);
```

### Creating an authentication token

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const developer = await beelines.developers.byEmail("user@example.com");
const token = await beelines.developers.createToken(developer.id, {
  name: "API Access Token",
  metadata: {
    usage: "Development environment",
    permissions: ["read", "write"]
  }
});

console.log(`New token created: ${token.token}`);
```

### Listing all tokens for a developer

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const developer = await beelines.developers.byEmail("user@example.com");
const tokens = await beelines.developers.listTokens(developer.id);

console.log(`Found ${tokens.length} tokens:`);
tokens.forEach(token => {
  console.log(`- ${token.name || 'Unnamed Token'} (expires: ${token.expiresAt || 'never'})`);
});
```

### Revoking a token

```typescript
const beelines = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your-api-key"
});

const developer = await beelines.developers.byEmail("user@example.com");
const tokens = await beelines.developers.listTokens(developer.id);

if (tokens.length > 0) {
  const tokenToRevoke = tokens[0];
  const success = await beelines.developers.revokeToken(tokenToRevoke.id, developer.id);
  
  if (success) {
    console.log(`Token '${tokenToRevoke.name || 'Unnamed Token'}' was successfully revoked`);
  }
}
