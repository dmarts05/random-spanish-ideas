import { nouns, verbs } from "./spanish-dictionary";

export function generateRandomNoun(): string {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

export function generateRandomVerb(): string {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

export function generateRandomSentence(): string {
  let noun1 = generateRandomNoun();
  noun1 = noun1.charAt(0).toUpperCase() + noun1.slice(1);
  const noun2 = generateRandomNoun();
  const verb = generateRandomVerb();
  return `${noun1} ${verb} ${noun2}`;
}
