import { getSdk } from "@beelines/sdk";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://dev-api.beelines.ai/graphql");

const sdk = getSdk(client);

const result = await sdk.getDeveloper({ id: "994fe317-f753-44d4-9edd-852f7c7baa74" }, {
  Authorization: "Bearer bk_e72a249800a5d674ca15a1a0d26b7cae2238ae3b701bba89ea5cc14d9c700852",
});

console.log(result.data?.developer);
