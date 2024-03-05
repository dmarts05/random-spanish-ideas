import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generateRandomSentence } from "@/lib/random-words";

const SHAKE_TIMEOUT = 250;

const variants = {
  start: () => ({
    rotate: [-8, 8.3, 0],
    transition: {
      delay: 0,
      repeat: Infinity,
      duration: 0.2,
    },
  }),
  reset: {
    rotate: 0,
  },
};

export function GenerateIdeaCard() {
  const controls = useAnimation();

  const [idea, setIdea] = useState(generateRandomSentence());

  function shake() {
    controls.start("start");
    setTimeout(() => {
      controls.start("reset");
    }, SHAKE_TIMEOUT);
  }

  return (
    <motion.div
      animate={{ scale: [0, 1] }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center h-screen gap-8 p-8 overflow-hidden select-none"
    >
      <motion.div
        className="flex items-center justify-center w-full max-w-5xl overflow-hidden h-96"
        variants={variants}
        animate={controls}
      >
        <MaskContainer
          revealText={
            <p className="font-bold leading-normal text-center text-7xl text-slate-800">
              ¡Revela el secreto!
            </p>
          }
          className="w-full h-full border rounded-md"
        >
          <span className="text-center text-7xl leading-normal text-[#3B82F6] mx-8">
            {idea}
          </span>
        </MaskContainer>
      </motion.div>
      <Button
        size="lg"
        className="text-lg transition-transform active:scale-90"
        onClick={() => {
          setIdea(generateRandomSentence());
          shake();
        }}
      >
        ¡Más!
      </Button>
    </motion.div>
  );
}
