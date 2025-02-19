import { Beelines } from "../../sdk/src";

const client = new Beelines({
  endpoint: "https://dev-api.beelines.ai/graphql",
  apiKey: "bk_e72a249800a5d674ca15a1a0d26b7cae2238ae3b701bba89ea5cc14d9c700852"
});

// const result = await client.developers.byId("994fe317-f753-44d4-9edd-852f7c7baa74");
const result = await client.sdk.dimensions();

console.log('result', result);