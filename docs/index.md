# Beelines SDK Documentation

Welcome to the Beelines SDK documentation. This SDK provides a simple and intuitive way to interact with the Beelines platform, allowing you to create and manage AI agents, audiences, groups, and more.

## Table of Contents

- [API Reference](./api-reference/index.md)

## Getting Started

The Beelines SDK is designed to be easy to use and integrate into your applications. It provides a set of collections that map to the different resources and concepts in the Beelines platform.

## Installation

You can install the Beelines SDK using npm or yarn:

```bash
# Using npm
npm install @beelinesai/sdk

# Using yarn
yarn add @beelinesai/sdk

# Using bun
bun add @beelinesai/sdk
```

## Authentication

To use the Beelines SDK, you need to authenticate with the Beelines platform. There are two ways to do this:

### Using an API Key

```typescript
import { Beelines } from "@beelinesai/sdk";

const client = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: "your_api_key_here",
});
```
