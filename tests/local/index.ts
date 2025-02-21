import { Beelines, type Developer } from "../../sdk/src";
import sbfCharacter from "../sbf.character.json";

const client = new Beelines({
  endpoint: "https://dev-api.beelines.ai/graphql",
  apiKey: "bk_0fdc29961c71b5f7923c4ad56241dedb97b4a969ba9f4238342bd523c4a1a8dd"
});

const developer: Developer = await client.developers.byEmail("andymalkin@gmail.com");

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
});

console.log('tests/local ~ agent', agent);

const sbf = await client.agents.importEliza(developer.id, sbfCharacter as any); // ?? why is there own demo character not typed correctly?
console.log('tests/local ~ sbf', sbf);

const randoms = await client.agents.generate(developer.id, {
  quantity: 2,
});
console.log('tests/local ~ randoms', randoms);


