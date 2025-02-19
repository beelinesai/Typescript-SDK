import { Beelines } from "../../sdk/src";

const client = new Beelines({
  endpoint: "https://dev-api.beelines.ai/graphql",
  apiKey: "bk_0fdc29961c71b5f7923c4ad56241dedb97b4a969ba9f4238342bd523c4a1a8dd"
});

const data = await client.developers.byEmail("andymalkin@gmail.com");
const agent = await client.agents.create(data.result?.id!, {
  name: "My first agent",
});

console.log('agent', agent);