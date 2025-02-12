# not used
openapi-generator-cli generate -i beelines-api-schema.json -g javascript -o ./autogen-sdk


# codegen

```bash
bun init
bun add --dev @graphql-codegen/cli
bun add --dev @graphql-codegen/typescript-graphql-request
```

# codegen.ts
```ts
import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  overwrite: true,
  generates: {
    'sdk.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      },
    },
  },
};
export default config;
```

```bash
bun graphql-codegen --config codegen.ts
```

# usage

```ts
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './sdk' // THIS FILE IS THE GENERATED FILE
 
async function main() {
  const client = new GraphQLClient('https://countries.trevorblades.com')
  const sdk = getSdk(client)
  const { continents } = await sdk.continents() // This is fully typed, based on the query
 
  console.log(`GraphQL data:`, continents)
}
```