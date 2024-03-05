import { GenerateIdeaCard } from "@/components/generate-idea-card";
import { Button } from "@/components/ui/button";
import { generateRandomSentence } from "@/lib/random-words";
import { useState } from "react";

export function GenerateIdeaPage() {
  const [idea, setIdea] = useState(generateRandomSentence());

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8 p-8">
      <GenerateIdeaCard idea={idea} />
      <Button
        size="lg"
        className="text-xl"
        onClick={() => setIdea(generateRandomSentence())}
      >
        ¡Más!
      </Button>
    </main>
  );
}
