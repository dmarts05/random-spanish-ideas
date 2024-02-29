import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import { TextRevealCard } from "./components/text-reveal-card";

// Components that I'd like to use:
// - Text Reveal Card to show the generated idea: https://ui.aceternity.com/components/text-reveal-card
// -

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <ModeToggle />
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
      <p>Count: {count}</p>
      <TextRevealCard text="¿Preparado?" revealText="jiji" />
    </div>
  );
}

export default App;
