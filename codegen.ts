import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['operations/**/*.ts'],
  overwrite: true,
  generates: {
    'sdk/src/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      },
    },
  },
};

export default config;
