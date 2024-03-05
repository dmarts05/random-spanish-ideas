import { nouns, adjectives, verbs } from "./spanish-dictionary";

export function generateRandomNoun(): string {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

export function generateRandomAdjective(): string {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

export function generateRandomVerb(): string {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

export function generateRandomSentence(): string {
  let noun = generateRandomNoun();
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);
  const adjective = generateRandomAdjective();
  const verb = generateRandomVerb();
  return `${noun} ${adjective} ${verb}`;
}
