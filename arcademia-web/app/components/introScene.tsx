"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextBubble from "./textBubble";

type IntroSceneProps = {
  onComplete: () => void;
};

export default function IntroScene({ onComplete }: IntroSceneProps) {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Four Cities Background */}
      <AnimatePresence>
        {step === 0 && (
          <>
            <motion.img
              src="/assets/background/four_cities.png"
              alt="Four Cities"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute w-full h-full object-cover"
            />
            <TextBubble
              text={
                <>
                  Long ago, Arcanova shimmered with knowledge. Math shaped
                  magic, science powered cities, language gave life to spells,
                  and code held the world together. The four great
                  kingdoms—Numeria, Scientia, Lingua, and Technos—guarded the
                  sacred Crystal Codex, the source of all learning
                </>
              }
              onNext={nextStep}
            />
          </>
        )}
      </AnimatePresence>

      {/* Villain Slide Up + Dim */}
      {step === 1 && (
        <>
          <motion.img
            src="/assets/background/four_cities.png"
            alt="Four Cities"
            className="absolute w-full h-full object-cover"
          />
          <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(26, 0, 14, 0.8)" }}
            className="absolute w-full h-full z-10"
          />
          <motion.img
            src="/assets/villain/villain.png"
            alt="Villain"
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="absolute bottom-[300px] left-1/2 transform -translate-x-1/2 z-20"
          />
          <TextBubble
            text={
              <>
                Jealous of the world's harmony and hungry for control, the dark
                lord <strong className="text-red-500">Oblivor</strong> rose from the shadows and
                unleashed the Great Forgetting — a spell that shattered the
                Crystal Codex and erased all knowledge. Numbers vanished,
                equations dissolved, and code began to glitch, corrupting
                reality itself.
              </>
            }
            onNext={nextStep}
          />
        </>
      )}

      {/* Cracked Screen */}
      {step === 2 && (
        <>
          <motion.img
            src="/assets/background/four_cities_destroyed.png"
            alt="Cracked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute w-full h-full object-cover z-20"
          />
          <TextBubble
            text={
              <>
                People forgot how to read, count, or speak clearly. The world
                fell into chaos as the four kingdoms crumbled, and the Masters
                of Knowledge—guardians of each subject—were sealed away.
                <br /> Now, <strong>Arcanova</strong> is a fractured world,
                drowning in confusion and fear.
              </>
            }
            onNext={nextStep}
          />
        </>
      )}

      {/* Fade to white → Glowing */}
      {step === 3 && (
        <>
          <motion.div
            initial={{ backgroundColor: "rgba(255,255,255,0)" }}
            animate={{ backgroundColor: "rgba(255,255,255,1)" }}
            transition={{ duration: 2 }}
            className="absolute w-full h-full z-30"
          />
          <motion.img
            src="/assets/background/opened_book.png"
            alt="booked glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-full h-full object-cover z-40"
          />
          <TextBubble
            text={
              <>
                You were just a regular student, daydreaming in class...
                <br />
                <br />
                Until a glowing book opened on your desk and pulled you through
                a portal of swirling light.
              </>
            }
            onNext={nextStep}
          />
        </>
      )}

      {step === 4 && (
        <>
          <motion.img
            src="/assets/background/opened_book.png"
            alt="booked glow"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-full h-full object-cover z-40"
          />
          <TextBubble
            text="
 A voice speaks from within the Codex:
“You are the Last Learner. The only one who can still 
absorb knowledge. You are the world’s only hope.”
Your journey begins now"
            onNext={() => {
              if (onComplete) onComplete(); // move to next component
            }}
          />
        </>
      )}
    </div>
  );
}
