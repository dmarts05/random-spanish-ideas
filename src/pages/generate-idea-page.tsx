import { generateRandomSentence } from "@/lib/random-words";
import { useState } from "react";

export function GenerateIdeaPage() {
  const [idea, setIdea] = useState(generateRandomSentence());

  return <span>{idea}</span>;
}
