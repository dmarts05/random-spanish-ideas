import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WORD_CHANGE_INTERVAL = 5000;

const words = [
  {
    text: "Ideas",
    color: "text-blue-200",
  },
  {
    text: "Sueños",
    color: "text-yellow-200",
  },
  {
    text: "Inspiración",
    color: "text-red-200",
  },
  {
    text: "Creatividad",
    color: "text-purple-200",
  },
  {
    text: "Gilipolleces",
    color: "text-green-200",
  },
];

export function Hero() {
  const navigate = useNavigate();

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      const index = words.indexOf(currentWord);
      setCurrentWord(words[(index + 1) % words.length]);
    }, WORD_CHANGE_INTERVAL);

    const opacityInterval = setInterval(() => {
      setOpacity((prev) => (prev === 1 ? 0 : 1));
    }, WORD_CHANGE_INTERVAL / 2);

    return () => {
      clearInterval(wordInterval);
      clearInterval(opacityInterval);
    };
  }, [currentWord]);

  return (
    <header className="h-screen overflow-hidden">
      <WavyBackground
        className="flex flex-col items-center justify-center h-screen gap-4"
        backgroundFill="#020817"
        speed="slow"
      >
        <h1 className="text-5xl font-bold tracking-wide text-center">
          Generador de
          <br />
          <span
            className={`text-7xl transition-opacity ease-in-out ${currentWord.color}`}
            style={{
              transitionDuration: `${WORD_CHANGE_INTERVAL / 2}ms`,
              opacity: opacity,
            }}
          >
            {currentWord.text}
          </span>
        </h1>
        <p>¡Generar ideas estúpidas jamás fue tan fácil!</p>
        <Button
          variant="outline"
          size="sm"
          className="opacity-80"
          onClick={() => navigate("generate-idea")}
        >
          Sí, ¡quiero una idea!
        </Button>
      </WavyBackground>
    </header>
  );
}
