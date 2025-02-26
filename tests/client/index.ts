import { Beelines } from "@beelinesai/sdk";

const client = new Beelines({
  endpoint: Bun.env.BEELINES_API_ENDPOINT!,
  apiKey: Bun.env.BEELINES_API_KEY!
});

const result = await client.developers.byId("85550649-8e62-4a05-be7d-eadbce89a76c");
// const dimensions = await client.sdk.dimensions();

console.log('result', result);