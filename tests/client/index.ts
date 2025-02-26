import { Beelines } from "@beelinesai/sdk";

const client = new Beelines({
  endpoint: "https://dev-api.beelines.ai/graphql",
  apiKey: "bk_4f87a29c604b0f0e8bf408ba472e1535a12f8d6bd5db0b1c577a81891b18dd59"
});

const result = await client.developers.byId("85550649-8e62-4a05-be7d-eadbce89a76c");
// const dimensions = await client.sdk.dimensions();

console.log('result', result);