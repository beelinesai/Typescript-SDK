import { 
  Beelines, 
  BeelineStatus, 
  ChatSourceType, 
  SenderType, 
  SourceType 
} from "@beelinesai/sdk";

const US_PRESIDENTS_AUDIENCE_ID = "9961ca0a-f4fe-4699-96b0-05a39720cf32";

const client = new Beelines({
  endpoint: "https://api.beelines.ai/graphql",
  apiKey: process.env.BEELINES_API_KEY!,
});

const usPresidents = await client.audiences.byId(US_PRESIDENTS_AUDIENCE_ID);

const myGroup = await client.groups.create({
  name: "US Presidents Focus Group",
  sourceId: usPresidents!.id,
  sourceType: SourceType.Audience,
  targetSize: 3,
  prompt: "presidents during the 1800s"
});

const chat = await client.chat.get({ 
  sourceId: myGroup.id, 
  sourceType: ChatSourceType.Group 
});

const id = await client.chat.threads.message(chat.latestThread.id, {
  content: "How many US states were there during your presidency?",
  senderType: SenderType.User
});

let response = null;
while (response?.status !== BeelineStatus.Completed) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  response = await client.chat.threads.response(id);
}

console.log('tests/local ~ response', response);
