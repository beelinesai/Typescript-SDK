import { Beelines, BeelineStatus, ChatSourceType, SenderType, type Developer } from "../../sdk/src";
import sbfCharacter from "../sbf.character.json";

const client = new Beelines({
  endpoint: "https://dev-api.beelines.ai/graphql",
  apiKey: "bk_0639a891df255b61183a40b9d7304637b3d2c226394494eea1e2537f7dc8f7ef"
});

const developer: Developer = await client.developers.byEmail("chainstarters@beelines.ai");
console.log('tests/local ~ developer', developer);

try {
  const not = await client.developers.byId("123");
  console.log('tests/local ~ not', not);
} catch (err) {
  console.error(err)
}

try {
  const not2 = await client.developers.byEmail("not2@gmail.com");
  console.log('tests/local ~ not2', not2);
} catch (err) {
  console.error(err)
  // [
  //   {
  //     message: "Not authenticated", // maybe this isn't the expected error
  //     locations: [
  //       [Object ...]
  //     ],
  //     path: [ "getOrCreateDeveloper" ],
  //   }
  // ]
}

const agent = await client.agents.create(developer.id, {
  name: "My first agent",
  characterData: {
    bio: "You are a helpful assistant that can answer questions and help with tasks.",
    lore: "You are a helpful assistant that can answer questions and help with tasks.",
    adjectives: ["helpful", "friendly", "knowledgeable"],
  }
});

console.log('tests/local ~ agent', agent);

const sbf = await client.agents.importEliza(developer.id, sbfCharacter as any); // ?? why is there own demo character not typed correctly?
console.log('tests/local ~ sbf', sbf);

const randoms = await client.agents.generate(developer.id, {
  quantity: 2,
});
console.log('tests/local ~ randoms', randoms);

const chat = await client.chat.get({ sourceId: randoms[0].id, sourceType: ChatSourceType.Agent });
console.log('tests/local ~ chat', chat);

const id = await client.chat.threads.message(chat.latestThread.id, {
  content: "count to 10",
  senderType: SenderType.User
});
console.log('tests/local ~ id', id);

let response = null;

while (response?.status !== BeelineStatus.Completed) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  response = await client.chat.threads.response(id);
}

console.log('tests/local ~ response', response);

