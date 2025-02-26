# 🐝 Beelines SDK

Welcome to the Beelines SDK - where creating AI agents is as sweet as honey! 🍯

## 🚀 Quick Start

```typescript
import { Beelines } from "@beelinesai/sdk";

const client = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your_api_key_here",
});
```

## ✨ Features

### 🤖 Create AI Agents

Create your own AI agent in just a few lines:

```typescript
const agent = await client.agents.create(developerId, {
  name: "My Awesome Agent",
  characterData: {
    bio: "A friendly assistant ready to help!",
    lore: "Born in the digital realm, passionate about helping humans.",
    adjectives: ["helpful", "friendly", "witty"],
  },
});
```

### 🎭 Import Pre-made Characters

Want something more spicy? Import pre-made characters like our demo SBF agent (yes, that SBF 😉):

```typescript
const sbf = await client.agents.importEliza(developerId, characterData);
// Now you have your own "totally trustworthy" assistant specialized in Solana transfers!
```

### 🎲 Generate Random Agents

Feeling lucky? Generate random agents with unique personalities:

```typescript
const randomAgents = await client.agents.generate(developerId, {
  quantity: 2,
});
```

### 💬 Chat with Your Agents

Start a conversation and watch the magic happen:

```typescript
// Start or get a chat thread
const chat = await client.chat.get({
  sourceId: agentId,
  sourceType: ChatSourceType.Agent,
});

// Send a message
const messageId = await client.chat.threads.message(chat.latestThread.id, {
  content: "Tell me a joke!",
  senderType: SenderType.User,
});

// Get the response
let response = await client.chat.threads.response(messageId);
while (response?.status !== BeelineStatus.Completed) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  response = await client.chat.threads.response(messageId);
}
```

## 🔑 Authentication

To get started, you'll need an API key. Contact us to get one!

## 📚 Documentation

For detailed API reference and examples, check out our SDK documentation:

- [API Reference Overview](../docs/api-reference/index.md)
- **Collections**:
  - [Developers](../docs/api-reference/developers.md) - Managing developers and authentication
  - [Agents](../docs/api-reference/agents.md) - Creating and managing AI agents
  - [Audiences](../docs/api-reference/audiences.md) - Building and managing audiences
  - [Groups](../docs/api-reference/groups.md) - Organizing agents into groups
  - [Chat](../docs/api-reference/chat.md) - Conversing with agents and groups

For more information and guides, visit our [documentation site](https://docs.beelines.ai).

Happy coding! 🐝✨
