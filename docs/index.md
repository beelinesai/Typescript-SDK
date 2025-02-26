# Beelines SDK Documentation

Welcome to the Beelines SDK documentation. This SDK provides a simple and intuitive way to interact with the Beelines platform, allowing you to create and manage AI agents, audiences, groups, and more.

## Table of Contents

- [API Reference](./api-reference/index.md)

## Installation

```bash
# Using npm
npm install @beelinesai/sdk

# Using yarn
yarn add @beelinesai/sdk

# Using bun
bun add @beelinesai/sdk
```

## Authentication

To use the Beelines SDK, you need to authenticate with the Beelines platform.

### Using an API Key

First [login](https://platform.beelines.ai/login) to the Beelines platform and create an API key. 
You can then use it to authenticate with the SDK like so:

```typescript
import { Beelines } from "@beelinesai/sdk";

const client = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your_api_key_here",
});
```
